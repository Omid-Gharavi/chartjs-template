import { useState, useRef, useEffect, useReducer, useMemo } from 'react';
import { MdOutlineClose } from "react-icons/md";
import { Checkbox } from "@nextui-org/checkbox";
import { useDispatch } from 'react-redux';
import { clear, hide, show } from '@/app/dataSlice';

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
            return state.filter(data => data.id !== action.payload.id);
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

    const Dispatch = useDispatch()

    const filteredItems = useMemo(() => {
        return options.filter(option => (option.label.toLowerCase().startsWith(query.toLowerCase()) || query === option.id.toString()));
    }, [query, options]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && event.target !== inputRef.current) {
                setToggle(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        Dispatch(clear())
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" dir='ltr'>
            <p className='text-right'>:انتخاب کشور</p>
            <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                    const { value } = e.target
                    setQuery(value)
                }}
                onClick={() => setToggle(true)}
                className="autoCompleteInput mt-4 caret-blue-500 text-black"
                type="text"
                placeholder="انتخاب کشور"
            />
            <ul
                ref={dropdownRef}
                className={`dropDown hiddenScrollBar ${toggle ? 'translate-y-2 opacity-100 visible' : 'translate-y-20 opacity-0 invisible'}`}
            >
                {filteredItems.map((option, index) => {
                    return (
                        <>
                            {
                                option.label &&
                                (
                                    <li
                                        className='w-full'
                                        key={index + 1}
                                    >
                                        <Checkbox
                                            className='gap-2'
                                            color='primary'
                                            key={index + 1}
                                            size='md'
                                            onClick={() => {
                                                inputRef.current.focus()
                                                const isOptionSelected = state.some(item => item.id === option.id)
                                                const isStateFull = state.length >= 4;

                                                if (!isOptionSelected && isStateFull) {
                                                    return;
                                                }

                                                dispatch({ type: isOptionSelected ? 'DEL' : 'ADD', payload: option });
                                                Dispatch(isOptionSelected ? hide({ id: option.id }) : show({ id: option.id }));
                                            }}
                                            isSelected={state.some(item => item.id === option.id)}
                                        >{option.label}</Checkbox>
                                    </li>
                                )
                            }
                        </>
                    )
                })}
            </ul>
            <div className='hiddenScrollBar w-full flex flex-wrap content-start p-2 gap-2 mt-4 h-24 overflow-y-scroll rounded-lg border-solid border-[1px]'>
                {
                    state.map((data, index) => {
                        return (
                            <div className='bg-white text-black dark w-fit flex items-center gap-2 px-2 border-solid border-black border-[2px] rounded-lg' key={index + 1}>
                                {data.label}
                                <div
                                    key={index + 1}
                                    className='bg-red-500 text-white rounded-full flex justify-center items-center border-solid border-[2px] border-black cursor-pointer w-4 h-4'
                                    onClick={() => {
                                        dispatch({ type: 'DEL', payload: data })
                                        Dispatch(hide({ id: data.id }))
                                    }}
                                >
                                    <MdOutlineClose key={index + 1} />
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