import React from "react";
import { create } from "react-test-render";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("Status from props should be in state", () => {
    const component = create(<ProfileStatus status="it-kamasytra.com"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe('it-kamasytra.com');
  })
})