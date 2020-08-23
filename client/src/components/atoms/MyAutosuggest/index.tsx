import * as React from "react";
import Autosuggest from "react-autosuggest";
import { useState } from "react";
import MySearchBar from "../MySearchBar";

const defaultSuggestions = [
  {
    name: "C",
    year: 1972,
  },
  {
    name: "Elm",
    year: 2012,
  },
  {
    name: "Elm",
    year: 2012,
  },
  {
    name: "Elm",
    year: 2012,
  },
  {
    name: "Elm",
    year: 2012,
  },
  {
    name: "Elm",
    year: 2012,
  },
  {
    name: "Elm",
    year: 2012,
  },
  {
    name: "Elm",
    year: 2012,
  },
  {
    name: "Elm",
    year: 2012,
  },
];

const renderSuggestion = (suggestion: any) => <div>{suggestion.name}</div>;

const customInput = (inputProps: any) => (
  <MySearchBar
    inputProps={inputProps}
    value={inputProps.value}
    onChange={inputProps.onChange}
  />
);

interface MyAutosuggestProps {
  APIURL: string;
  value: string;
  onChange: (text: string) => void;
}

export const MyAutosuggest: React.FC<MyAutosuggestProps> = ({
  value,
  onChange,
}) => {
  const [suggestions, setSuggestion] = useState<any[]>([]);

  const getSuggestionValue = (suggestion: any) => suggestion.name;

  const getSuggestions = (value: string) => {
    const inputValue = value;
    const inputLength = inputValue.length;

    return inputLength === 0
      ? []
      : defaultSuggestions.filter(
          (lang) => lang.name.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const onSuggestionsFetchRequested = ({ value }: any) => {
    const suggestionList = getSuggestions(value);
    setSuggestion(suggestionList ? suggestionList : []);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestion([]);
  };

  const inputProps = {
    placeholder: "Type a programming language",
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(event.target.value),
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderInputComponent={customInput}
      inputProps={inputProps}
    />
  );
};

export default MyAutosuggest;
