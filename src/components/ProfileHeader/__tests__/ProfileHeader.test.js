import React from 'react';
import {cleanup, render} from '@testing-library/react';
import ProfileHeader from '../ProfileHeader'

// This 
afterEach(cleanup);

test('ProfileHeader displays name', () => {
    
    // Render function returns useful functions to manipulate the component
    const {queryByLabelText,getByLabelText} = render(
       <ProfileHeader name="testname"></ProfileHeader>
   )

   expect(queryByLabelText(/testname/i)).toBeTruthy();
})