import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react";

let initialState = {
  'posts': [
    {id: 1, message: 'Hellow mir', likes: 12},
    {id: 2, message: 'Manera krutit mir', likes:10},
    {id: 3, message: 'Cool page!', likes:101},
    {id: 4, message: 'I`m MOTIVATED!!', likes:0, dislikes:10},
  ],
} 

it('New post should be added', () => {
  
  let action = addPostActionCreator("cool");
  
  let newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(5);
});

it('After deliting length should be decrement', () => {
  let action = deletePost("cool");
  
  let newState = profileReducer(initialState, action);

  expect(newState.posts.length).toBe(4);
});
