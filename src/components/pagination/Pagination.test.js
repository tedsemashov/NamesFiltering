import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './Pagination';

describe('Test Pagination component', () => {
    const activities = [
        {id: '1', name: 'Some name 1'},
        {id: '2', name: 'Some name 2'},
        {id: '3', name: 'Some name 3'},
        {id: '4', name: 'Some name 4'},
        {id: '5', name: 'Some name 5'},
        {id: '6', name: 'Some name 6'},
        {id: '7', name: 'Some name 7'},
        {id: '8', name: 'Some name 8'},
        {id: '9', name: 'Some name 9'},
        {id: '10', name: 'Some name 10'},
        {id: '11', name: 'Some name 11'},
    ];

    const pagesList = [
        [1, 2]
    ];

    const expectedState = {
        activitiesList: activities,
        pagesList: pagesList,
        pagesGroupIndex: 0,
        selectedPage: 1,
    };

    it('Test componentDidUpdate method', () => {
        const wrapper = shallow(<Pagination activities={activities} />);
        expect(wrapper.exists()).toBeTruthy();
    });
});