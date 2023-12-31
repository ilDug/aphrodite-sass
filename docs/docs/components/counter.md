# Counter

## React Component

```typescript
import React, { useContext } from "react";
import { settings } from "../contexts";

type Props = {
    amount: number;
    onChange: (delta: number) => void;
};

const Counter: React.FC<Props> = ({ amount, onChange }) => {
    const { min, max } = useContext(settings);

    const handleIncrement = () => {
        const delta: number = amount < max ? 1 : 0;
        onChange(delta);
    };
    const handleDecrement = () => {
        const delta: number = amount > min ? -1 : 0;
        onChange(delta);
    };

    return (
        <div className="counter">
            <div className="value">
                <span>{amount}</span>
            </div>
            <div className="commands">
                <button className="plus" onClick={handleIncrement}>
                    <i className="fa-regular fa-plus fa-xs"></i>
                </button>
                <button className="minus" onClick={handleDecrement}>
                    <i className="fa-regular fa-minus fa-xs"></i>
                </button>
            </div>
        </div>
    );
};

export default Counter;
```
