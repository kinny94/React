import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="Today at 4:45PM" comment="Nice blog Post!" avatar={ faker.image.avatar() }/>            
            </ApprovalCard>  

            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="Today at 12:00PM" comment="I like this subject" avatar={ faker.image.avatar() }/>
            </ApprovalCard> 

            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="Yesterday at 6:00PM" comment="Useless post!!" avatar={ faker.image.avatar() }/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);