import React from "react";


export default class Todolist extends React.Component{
    constructor(){
        super()
    }
    render(){
        let{e,i,DeleteItem,updateItem,style} = this.props
        return(
            <div key={i}>
            <input type="text" value={e}  onChange={(event,i)=>{
              updateItem(event.target.value,i)
            }}/>
            <button style={style} onClick={(index)=>{
              DeleteItem(i)
            }}>DELETE</button>
          </div>
        )
    }
}