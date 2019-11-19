import React from "react";
import { shallow } from "enzyme";
import { QuestionCard, AvatarStyled} from "./";
import {UpArrow, DownArrow} from "./styled";
import renderer from "react-test-renderer";

const mockPost = {
    id: 1,
    text: "nova tarefa",
    title: "Sou o titulo",
    username: "TestMan",
    votesCount: 1,
    userVoteDirection:1
  };

  
describe("QuestionCard item", () => {
    test("Vote Down", () => {
        const component = shallow(
            <QuestionCard username={mockPost.username} text={mockPost.text} title={mockPost.title} userVoteDirection={mockPost.userVoteDirection} votesCount={mockPost.votesCount} />
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
            <QuestionCard username={mockPost.username} text={mockPost.text} votesCount={mockPost.votesCount} />
          );

          const instance = component.instance();

          instance.updateVote= jest.fn()

        const upArrowButton = component.find(UpArrow);

        expect(upArrowButton).toHaveLength(1);

        upArrowButton.simulate("click");

        expect(instance.updateVote).toHaveBeenCalled()
    })
})