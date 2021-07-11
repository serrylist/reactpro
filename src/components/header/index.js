import React, { Component } from 'react'
import './style.css'

const data = [
    {'name':'我的网页','isactived':false,'id':0},
    {'name':'我的文章','isactived':false,'id':1},
    {'name':'我的爱好','isactived':true,'id':2},
    {'name':'我的简介','isactived':false,'id':3},
    {'name':'我的网页','isactived':false,'id':4},
    {'name':'我的简介','isactived':false,'id':5}
]
export default class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentindex:0,
            ...props
        }
    }
    handle_click = (e)=>{
        this.setState({
            currentindex:e.target.id
        })
        // console.info(e)
        // data.map((item,index)=>{
        //     console.info(item,index)
        // })
    }
    render() {
        return (
            <div className="Header">
                 <ul className="menu" >
                    {data.map((item,index)=>{
                        return <li key={item.id} id={item.id} className={this.state.currentindex==index?'active':''} onClick={(this.handle_click)}>{item.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}
