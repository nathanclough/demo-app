import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ProfileHeader from '../ProfileHeader'

// This 
afterEach(cleanup);

it('ProfileHeader displays name', () => {
    
    // Render function returns useful functions to manipulate the component
    const {queryAllByLabelText,getByLabelText} = render(
       <ProfileHeader name="testname"/>,
   );

   expect(queryAllByLabelText("testname")).toBeTruthy();
})