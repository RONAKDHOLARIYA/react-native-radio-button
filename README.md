# react-native-radio-button
## Installation

```
npm i --save simple-react-native-radio-button-group
```
## Usage 
```js
import React, {useEffect, useState} from 'react';
import {RadioButton} from 'simple-react-native-radio-button-group';
let Form = ()=>{
    let radioButtonsData=[{label:'item1',value:0},{label:'item2',value:1}]
    let [item,setItem] = useState(0)
    return <RadioButton
            data={radioButtonsData} // array of items
            selected={item} // pre selected value
            onChange={val => { //change selected items
              setGender(val);
            }}
            disabled //use this for disable your button
          />
}
```

## License
The MIT License.
