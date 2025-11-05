import { useState } from 'react';

const inputStates = {
    NONE: "",
    MISSING: "please enter a number into this field",
    INVALID: "please remove any non-numeric character in this field and try again"
}

export default function Calculator() {
    // value states
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [result, setResult] = useState(null)

    // error states / error messages
    const [input1ErrorState, setInput1ErrorState] = useState(inputStates.NONE)
    const [input2ErrorState, setInput2ErrorState] = useState(inputStates.NONE)

    function handleCalculation() {
        const parseAndValidate = (value, setError) => {
            // validate if the input value is either null or contain non numeric values
            const v = typeof value === 'string' ? value.trim() : value
            if (v === '') {
                setError(inputStates.MISSING)
                return null
            }
            const n = Number(v)
            if (Number.isNaN(n)) {
                setError(inputStates.INVALID)
                return null
            }
            setError(inputStates.NONE)
            return n
        }

        // step 1: parse value from string and check if it is valid
        const a = parseAndValidate(input1, setInput1ErrorState)
        const b = parseAndValidate(input2, setInput2ErrorState)

        if (a === null || b === null) {
            setResult(null)
            return
        }

        //step 2: set result

        setResult(a + b)
    }

    const hasResult = result !== null

    // calculator layout
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 4,
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: 2,
            }}>
                <input // use gpt5 to change this from type="numeric" to showcase non Numeric handling
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={input1}
                    onChange={e => setInput1(e.target.value)}
                />
                {/* conditional error message */}
                { input1ErrorState != inputStates.NONE && (<p style={{color: '#C62828', margin: 0}}>{input1ErrorState}</p>) }
            </div>


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                columnGap: 2,
            }}>
                <input // use gpt5 to change this from type="numeric" to showcase non Numeric handling
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={input2}
                    onChange={e => setInput2(e.target.value)}
                />
                {/* conditional error message */}
                { input2ErrorState != inputStates.NONE && (<p style={{color: '#C62828', margin: 0}}>{input2ErrorState}</p>) }
            </div>

            {/* calculate button */}
            <button onClick={handleCalculation}>Calculate sum</button>
            {/* result */}
            {hasResult && (<div>Result is: {result}</div>)}
        </div>
    );
    
}