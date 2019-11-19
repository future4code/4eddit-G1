import React from "react";
import { shallow } from "enzyme";
import { DoubtList, SendIconStyled} from "./";
import {UpArrow, DownArrow} from "./styled";
import renderer from "react-test-renderer";
  
describe("DoubtList item", () => {
    test("DoubtList create post", () => {
        const mockGenericFunction = jest.fn()
        const component = shallow(

            
        <DoubtList  allPosts= {[]} getPosts={mockGenericFunction} setErrorMsg={mockGenericFunction} createPost={mockGenericFunction} goToHomePage={mockGenericFunction}/>
          );

          const instance = component.instance();

          instance.onClickCreatePost= jest.fn()

        const sendIconStyled = component.find(SendIconStyled);

        expect(sendIconStyled).toHaveLength(1);

        sendIconStyled.simulate("click");


    })

})

describe("SendButton", () => {
  // Mesma coisa do que test()
  it("should match snapshot", () => {
    const tree = renderer.create(<SendIconStyled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});