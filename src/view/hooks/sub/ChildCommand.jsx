import React, {
    useState, forwardRef, useImperativeHandle
  } from 'react'

function ChildCommand(props, ref) {
    const [command, setCommand] = useState('123')

    useImperativeHandle(ref, () => ({
        command,
    }))

    return (
        <div>
            <input value={command} onChange={(e) => setCommand(e.target.value)} />
        </div>
    )
}

export default forwardRef(ChildCommand)