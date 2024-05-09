import { useState, useRef, useEffect, useReducer, useMemo } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            const bool = state.includes(action.payload);
            if (!bool && state.length <= 3) {
                return [...state, action.payload];
            } else {
                return state
            }
        case 'DEL':
            return state.filter(data => data !== action.payload);
        default:
            return state;
    }
};

const AutoComplete = ({ options }) => {
    const [state, dispatch] = useReducer(reducer, [])
    const [toggle, setToggle] = useState(false);
    const [query, setQuery] = useState('')
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);

    const filteredItems = useMemo(() => {
        return options.filter(option => option.label.toLowerCase().startsWith(query.toLowerCase()));
    }, [query]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && event.target !== inputRef.current) {
                setToggle(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        console.log(state.length)
    }, [state])

    return (
        <div className="relative">
            <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                    const { value } = e.target
                    setQuery(value)
                    console.log(options.some(data => data.label.toLowerCase() === value.toLowerCase()))
                }}
                onClick={() => setToggle(prev => !prev)}
                className="cursor-pointer w-full p-2 rounded-lg border-solid border-[1px] border-black"
                type="text"
                placeholder="انتخاب کشور"
            />
            <ul
                ref={dropdownRef}
                className={`dropDown bg-white ${toggle ? 'translate-y-2 opacity-100 visible' : 'translate-y-20 opacity-0 invisible'}`}
            >
                {filteredItems.map((option, index) => {
                    return <li
                        onClick={() => {
                            if (state.includes(option.label)) {
                                dispatch({ type: 'DEL', payload: option.label })
                            } else {
                                dispatch({ type: 'ADD', payload: option.label })
                            }
                        }}
                        className={`items ${state.includes(option.label) ? 'bg-cyan-300' : ''}`}
                        key={index + 1}>{option.label}</li>;
                })}
            </ul>
            <div className='myPower w-full flex flex-row-reverse flex-wrap content-start p-2 gap-2 mt-4 h-24 overflow-y-scroll rounded-lg border-solid border-[1px]'>
                {
                    state.map((data, index) => {
                        return (
                            <div className='dark w-fit flex flex-row-reverse items-center gap-2 px-2 border-solid border-black border-[2px] rounded-lg' key={index + 1}>
                                {data}
                                <div
                                    className='rounded-full cursor-pointer bg-red-500 w-4 h-4'
                                    onClick={() => dispatch({ type: 'DEL', payload: data })}
                                >
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default AutoComplete;