import React from "react";
import { shallow } from "enzyme";
import { AnswerCard, AvatarStyled} from "./";
import {UpArrow, DownArrow} from "./styled";
import renderer from "react-test-renderer";

const mockPost = {
    id: 1,
    text: "nova tarefa",
    username: "TestMan",
    votesCount: 1
  };

  
describe("AnswerCard item", () => {
    test("Vote Down", () => {
        const component = shallow(
            <AnswerCard username={mockPost.username} text={mockPost.text} userVoteDirection={1} votesCount={mockPost.votesCount} />
          );

          const instance = component.instance();

          instance.updateVote= jest.fn()

        const downArrowButton = component.find(DownArrow);

        expect(downArrowButton).toHaveLength(1);

        downArrowButton.simulate("click");

        expect(instance.updateVote).toHaveBeenCalled()
    })

    test("Vote Up", () => {
        const component = shallow(
            <AnswerCard username={mockPost.username} text={mockPost.text} votesCount={mockPost.votesCount} />
          );

          const instance = component.instance();

          instance.updateVote= jest.fn()

        const upArrowButton = component.find(UpArrow);

        expect(upArrowButton).toHaveLength(1);

        upArrowButton.simulate("click");

        expect(instance.updateVote).toHaveBeenCalled()
    })
})