import React from "react";
import renderer from "react-test-renderer";
import { PostCardMainContainer, HeaderPostContent, UserName, BodyPostContent, PostTitle, FooterPostContent, ButtonArea, ComentWords, UpArrow, DownArrow } from './styled'

describe("Styleds", () => {
    // Mesma coisa do que test()
    it("PostCardMainContainer", () => {
      const tree = renderer.create(<PostCardMainContainer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("DownArrow", () => {
      const tree = renderer.create(<DownArrow />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("ButtonArea", () => {
      const tree = renderer.create(<ButtonArea />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("ComentWords", () => {
      const tree = renderer.create(<ComentWords />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("UpArrow", () => {
      const tree = renderer.create(<UpArrow />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("HeaderPostContent", () => {
      const tree = renderer.create(<HeaderPostContent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("UserName", () => {
      const tree = renderer.create(<UserName />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("BodyPostContent", () => {
      const tree = renderer.create(<BodyPostContent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("FooterPostContent", () => {
      const tree = renderer.create(<FooterPostContent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    // Mesma coisa do que test()
    it("PostTitle", () => {
      const tree = renderer.create(<PostTitle />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });