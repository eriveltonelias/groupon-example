import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Container, Header, Content, Left, Right, Title, Body } from 'native-base';
import { FontAwesome } from '@expo/vector-icons'
import { SearchBar } from 'react-native-elements'
import Tag from '../components/Tag'
import Card from '../components/Card'

export default class HomeScreen extends Component {

	constructor(props){
		super(props)
		this.state = {
			tags : [],
			cards : [],
			cardsAux : []
		}
	}
	componentDidMount(){
		let data = require('../constants/data.json')
		const tags = data.tags
		const cards = data.cards
		return this.setState({tags: tags, cards : cards, cardsAux : cards})
	}
	_search = (text) => {
		const { cards } = this.state
		let newCards = cards.filter(x => x.name.toLowerCase().includes(text.toLowerCase()))
		return this.setState({cardsAux : newCards})
	}
	render() {
		return (
			<Container>
				<Header style = {styles.header}>
					<Left>
						<FontAwesome name = 'heart' color = '#FFFFFF' size = {18} />
					</Left>
					<Body>
						<View style = {styles.containerBody}>
							<Text style = {styles.title}>London</Text>
							<View style = {styles.containerIcon}>
								<FontAwesome name = 'angle-down' color = '#FFFFFF' size = {18} />
							</View>
						</View>
					</Body>
					<Right>
						<FontAwesome name = 'sliders' color = '#FFFFFF' size = {18} />
					</Right>
				</Header>
				<Content style = {{backgroundColor : '#FFFFFF'}}>
					<SearchBar
  						lightTheme  
						placeholder='What are you looking for ? '
						containerStyle = {{backgroundColor : '#2cb50a', marginTop: -2}}
						inputStyle = {{backgroundColor : '#E1E1E1'}}
						onChangeText = {(text ) => this._search(text) }
					/>

					<Tag data = {this.state.tags} />
					<Card data = {this.state.cardsAux} />
				</Content>
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
	containerBody : {
		flexDirection : 'row'
	},
	containerIcon : {
		padding : 5,
		justifyContent : 'center'
	}

})