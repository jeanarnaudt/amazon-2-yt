import React, { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'

const InputNumber = (quantity, onCountChange) => {
	const [count, setCount] = useState(quantity)

	const onCountUp = () => setCount(count + 1)

	const onCountDown = () => setCount(count - 1)

	return (
		<div>
			<input type='text' value={quantity} onChange={onCountChange} />

			<div>
				<button onClick={onCountUp}>
					<ChevronUpIcon className='w-4 h-4' />
				</button>
				<button onClick={onCountDown}>
					<ChevronDownIcon className='w-4 h-4' />
				</button>
			</div>
		</div>
	)
}

export default InputNumber
