import * as React from "react";
import Autosuggest from "react-autosuggest";
import MySearchBar from "../MySearchBar";

const getSuggestionValue = (suggestion: any) => suggestion.municipio;
const renderSuggestion = (suggestion: any) => (
  <span>{`${suggestion.departamento}-${suggestion.municipio}`}</span>
);

const customInput = (inputProps: any) => (
  <MySearchBar
    inputProps={inputProps}
    value={inputProps.value}
    onChange={inputProps.onChange}
  />
);

interface MyAutosuggestProps {
  defaultValue?: string;
  APIURL: string;
  onSelect: (text: string) => void;
}

const MyAutosuggest: React.FC<MyAutosuggestProps> = ({
  defaultValue,
  APIURL,
  onSelect,
}) => {
  const [value, setValue] = React.useState<any>("");
  const [suggestions, setSuggestions] = React.useState<any[]>([]);

  React.useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  const onChange = (event: any, { newValue, method }: any) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }: any) => {
    fetch(`${APIURL}?filter=${value}`)
      .then((response) => response.json())
      .then((data) => setSuggestions(data));
  };

  const onSuggestionsClearRequested = () => {};

  const onSuggestionSelected = (event: any, { suggestionValue }: any) => {
    onSelect(suggestionValue);
  };

  const onBlur = () => {
    const exists = suggestions.find((x) => x.municipio === value);
    if (exists) {
      onSelect(value);
    } else if (suggestions.length === 1) {
      onSelect(suggestions[0].municipio);
      setValue(suggestions[0].municipio);
    } else {
      onSelect("");
      setValue("");
    }
  };

  const inputProps = {
    value,
    onChange: onChange,
    onBlur: onBlur,
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      highlightFirstSuggestion
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      onSuggestionSelected={onSuggestionSelected}
      renderSuggestion={renderSuggestion}
      renderInputComponent={customInput}
      inputProps={inputProps}
    />
  );
};

export default MyAutosuggest;
