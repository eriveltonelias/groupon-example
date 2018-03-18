import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

export default class Tag extends Component {

	constructor(props){
        super(props)
        this.state = {
            data : []
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

	render() {
        let { data } = this.state
		return (
            <View style = {styles.container}>
                <ScrollView horizontal showsHorizontalScrollIndicator = {false} >
                    {data && data.map((item, i) => {
                        return (
                            <View key = {i} style = {styles.tag}>
                                <Text>{item}</Text>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
		)
	}
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#FFFFFF',
        margin : 5
    },
	tag : {
        padding : 7,
        borderRadius : 8,
        backgroundColor : '#E1E1E1',
        margin : 5
    }

})