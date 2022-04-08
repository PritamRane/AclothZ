import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
class SimpleForm extends Component {
    render() {
      return (
        <ChatBot
        botAvatar='https://st3.depositphotos.com/8950810/17657/v/600/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg'
        headerTitle="ACLOTHZ"
        floating = 'True'
          steps={[
            
          {
            id:'1',
            message:'Hi, Im ACLOTHZ bot',
            
            trigger:'userHi'
  
          },
          {
            id:'userHi',
            user:true,
            trigger:'hi'
  
          },
            {
              id: 'hi',
              message: 'Welcome To ACLOTHZ. What is your name?',
              trigger: 'name',
            },
            {
              id: 'name',
              user: true,
              trigger: '3',
            },
            {
              id: '3',
              message: 'Hi {previousValue}! What is your gender?',
              trigger: 'gender',
            },
            {
              id: 'gender',
              options: [
                { value: 'male', label: 'Male', trigger: '5' },
                { value: 'female', label: 'Female', trigger: '5' },
              ],
            },
            {
              id: '5',
              message: 'How old are you?',
              trigger: 'age',
            },
            {
              id: 'age',
              user: true,
              trigger: 'opt',
              validator: (value) => {
                if (isNaN(value)) {
                  return 'value must be a number';
                } else if (value < 0) {
                  return 'value must be positive';
                } else if (value > 120) {
                  return `${value}? Come on!`;
                }
  
                return true;
              },
            },
            
            {
              id:'opt',
              options: [
                { value: '1', label: 'Query', trigger: 'query' },
                { value: '2', label: 'Shopping', trigger: 'forward' },
              ]
            },{
  
              id:'query',
              message:'You can read our FAQ',
              trigger:'query-faq'
  
            },
            {
              id:'query-faq',
              
              component: (
                <div>
                  Question 1: Answer
                  <br />
                  Question 2: Answer
                  <br />
                  Question 3: Answer
                </div>
                
              ),
              trigger:'solved?'
            },{
  
              id:'solved?',
              message:'Was your query resolved?',
              trigger:'resolve-response'
  
            },{
  
              id:'resolve-response',
              options: [
                { value: '1', label: 'Yes', trigger: 'resolve-thanks' },
                { value: '2', label: 'No', trigger: 'resolve-mail' },
              ]
            },{
              id:'resolve-thanks',
              message:'Thankyou !!',
              trigger:'forward'
            },
            {
              id:'resolve-mail',
              message:'Oops we are sorry to hear that, you can write your suggesions at abc@xyz.com',
              trigger:'forward'
            },
            {
              id:'forward',
              message:'What are you looking for?',
              trigger:'option'
            },
           
            {
              id: 'option',
              options: [
                { value: '1', label: 'Sneakers', trigger: 'sneakers' },
                { value: '2', label: 'Jackets', trigger: 'jackets' },
                { value: '3', label: 'Hats', trigger: 'hats' },
                
              ]
            
              
            },
            {
              id:'sneakers',
              message:'Thats good you can also lookout for our Newest collection of Jackets & Hats!!',
              trigger:'service'
              
            },
            {
              id:'jackets',
              message:'Thats good you can also lookout for our Newest collection of Sneakers & Hats!!',
              trigger:'service'
              
            },
            {
              id:'hats',
              message:'Thats good you can also lookout for our Newest collection of Jackets & Sneakers!!',
              trigger:'service'
              
            },
            {
              id:'service',
              message:'Do you like our services?',
              trigger:'ser-op'
            },
            {
              id:'ser-op',
              options: [
                { value: '1', label: 'Yes', trigger: 'like' },
                { value: '2', label: 'No', trigger: 'dislike' },
                
                
              ],
              
            },
            {
              id:'like',
              message:'Thankyou for your feedback!! Happy Shopping',
              end:true
            },
            {
              id:'dislike',
              message:'Oops we are sorry to hear that, you can write your suggesions at abc@xyz.com',
              end:true
            }
          ]}
        />
      );
    }
  }
  
  export default SimpleForm;