import styled from "styled-components"
import { DetailsH2, P } from "../ui/Typography";

const DetailsContainer = styled.div `
  display: flex;
  flex-direction: column;
  padding: 50px;
  padding-top: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const DetailsTextContainer = styled.div `
  
  max-width: 400px;
  color: white;

  @media (min-width: 768px) {
    margin-left: 20px;
  }
`;

const Span = styled.span`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const Rating = styled.div ` 
  color: #000;
  font-weight: 500;
  background: #fff;
  padding: 0 5px;
  text-shadow: none;
  display: inline-block;
`;

const MovieDetailsPoster = styled.img`
  border: 5px solid #fff;
  width: 200px;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const MovieDetails = ({ title, poster_path, overview, rating }) => {

  return (
    <>
      <DetailsContainer>
        <MovieDetailsPoster
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={`Movie poster for ${title}`}
        />
        <DetailsTextContainer>
          <DetailsH2>
            <Span>{title}</Span>
            <Span><Rating>⭐️ {Math.round(rating * 10) / 10}</Rating></Span>
          </DetailsH2>
          <div>
            <P>{overview}</P>
          </div>
          </DetailsTextContainer>
      </DetailsContainer>
    </>
  );
};
