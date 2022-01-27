# react-native-radio-button
## Installation

```
npm i --save react-native-radio-button

```
## Usage 
```js
import React, {useEffect, useState} from 'react';
import RadioButton from 'react-native-radio-button';
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
``

## License
The MIT License.