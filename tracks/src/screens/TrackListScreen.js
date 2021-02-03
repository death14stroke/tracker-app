import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {
	const { state, fetchTracks } = useContext(TrackContext);

	console.log(state);

	return (
		<>
			<NavigationEvents onWillFocus={fetchTracks} />
			<FlatList
				data={state}
				keyExtractor={item => item._id}
				renderItem={({ item }) => {
					console.log(item.name);
					return (
						<TouchableOpacity
							onPress={() => {
								navigation.navigate('TrackDetail', {
									_id: item._id
								});
							}}>
							<ListItem>
								<ListItem.Title>{item.name}</ListItem.Title>
								<ListItem.Chevron />
							</ListItem>
						</TouchableOpacity>
					);
				}}
			/>
		</>
	);
};

TrackListScreen.navigationOptions = {
	title: 'Tracks'
};

const styles = StyleSheet.create({});

export default TrackListScreen;
