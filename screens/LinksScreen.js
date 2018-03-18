import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Header, Content, Left, Right, Title, Body } from 'native-base';

export default class LinksScreen extends Component {

	constructor(props){
		super(props)
		this.state = {
			tags : [],
			cards : [],
			cardsAux : []
		}
	}
	render() {
		return (
			<Container>
				<Header style = {styles.header}>
					<Left/>
					<Body>
						<Text style = {styles.title}>Links</Text>
					</Body>
					<Right/>
				</Header>
				<Content />
			</Container>
		)
	}
}
const styles = StyleSheet.create({
	header : {
		backgroundColor : '#2cb50a',
		elevation : 0,
	},
	title : { 
		color : '#FFFFFF',
		fontSize : 20
	},
})