import React from "react";
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom/extend-expect'


import App from '../App'

jest.useFakeTimers();

describe('ButtonDefault',() => {
  describe('when is faster and click default',() => {
    it('set to default speed ', () => {      
      const { getByPlaceholderText, getByText } = render(<App />)
      const counter = getByPlaceholderText('0')                

      fireEvent.click(getByText('faster'))
      act(() => {
        jest.advanceTimersByTime( 10500 )
      })  
      fireEvent.click(getByText('default'))
      act(() => {
        jest.advanceTimersByTime( 10000 )
      })
            
      expect(counter).toHaveTextContent('30') 
    })
  })

  describe('when is slower and click default',() => {
    it('set to default speed ', () => {
      const { getByPlaceholderText, getByText } = render(<App />)
      const counter = getByPlaceholderText('0')                

      fireEvent.click(getByText('slower'))
      act(() => {
        jest.advanceTimersByTime( 10000 )
      })  
      fireEvent.click(getByText('default'))
      act(() => {
        jest.advanceTimersByTime( 10000 )
      })
            
      expect(counter).toHaveTextContent('15') 
    })
  })    
})
