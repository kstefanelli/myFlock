import React, { useRef } from 'react';
import { View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';
import Page from '../reusable-components/Page';
import Footer from '../reusable-components/Footer';

const Onboarding = () => {
	const pagerRef = useRef(null);
	const navigation = useNavigation();

	const handlePageChange = (pageNumber) => {
		pagerRef.current.setPage(pageNumber);
	};

	return (
		<View style={{ flex: 1 }}>
			<PagerView style={{ flex: 1 }} initialPage={0} ref={pagerRef} orientation="vertical">
				<View key="1">
					<Page backgroundColor="#ffc93c" iconName="sun" title="Welcome to the onboarding" />
					<Footer
						backgroundColor="#ffc93c"
						rightButtonLabel="Next"
						rightButtonPress={() => {
							handlePageChange(1);
						}}
					/>
				</View>
				<View key="2">
					<Page
						backgroundColor="#07689f"
						iconName="cloud-drizzle"
						title="This is your onboarding"
					/>
					<Footer
						backgroundColor="#07689f"
						leftButtonLabel="Back"
						leftButtonPress={() => {
							handlePageChange(0);
						}}
						rightButtonLabel="Continue"
						rightButtonPress={() => {
							navigation.navigate('Drawer');
						}}
					/>
				</View>
			</PagerView>
		</View>
	);
};

export default Onboarding;
