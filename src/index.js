//import react
import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDeatail';
import AprovalCard from './AprovalCard';
//create a react component

const App = () => {
    
    return (
        <div className="ui container comments">
            <AprovalCard>
                <CommentDetail author="Vitor" atDate="Today at 5:00PM" commentText="nice blog bro"/>
            </AprovalCard>
            <AprovalCard>
                <CommentDetail author="Cesar" atDate="Today at 9:00AM" commentText="nice blog bro" />
           </AprovalCard>
            <AprovalCard>
                <CommentDetail author="Pedro" atDate="Yesterday at 5:56AM" commentText="nice blog bro"/>
            </AprovalCard>
        </div>
    );
}

//Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector('#root'));
