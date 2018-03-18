import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Tile } from 'react-native-elements'



export default class Card extends Component { 
    constructor(props){
        super(props)
        this.state = {
            data : [],
        }
    }
    /**
     * 
     * basic verification if the size data change, to prevent re-render this component
     */

    shouldComponentUpdate(nextProps){
        if(this.state.data.length !== nextProps.data){
            return true
        }
        return false
    }
    componentWillReceiveProps(nextProps){
        let { data } = nextProps
        return this.setState({data : data})
    }
    render(){ 
        let { data } = this.state
        return (
            <View>
                {data.map((item, i) => {
                    return (
                        <Tile
                                key = {i}
                                imageSrc={{uri : item.image}}
                                contentContainerStyle={styles.container}
                            >
                            <View style={{flex: 1, flexDirection: 'row'}}>
                                <View style = {{flex : .7}}>
                                    <Text style = {styles.title}>{item.name}</Text>
                                </View>

                                <View style = {styles.containerInfo}>
                                    <Text style = {styles.description}>as from</Text>
                                    <Text style = {styles.price} >USD {item.price}</Text>
                                </View>
                                
                            </View>
                        </Tile>
                    )
                })}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        height: 90, backgroundColor : '#FFFFFF'
    },
    title : {
        fontSize : 18
    },
    containerInfo : {
        flex : .3,
        alignItems : 'flex-end',
    },
    description : {
        color : '#C1C1C1',
    },
    price : {
        color : 'green',
        fontSize : 18
    }
})