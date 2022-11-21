import styled from 'styled-components'

export const HomeContainer = styled.div`
  position: relative;
  top: -88px;
`

export const Header = styled.header`
  display: flex;
  gap: 32px;
  background: ${(props) => props.theme['base-profile']};

  overflow: hidden;
  max-height: 13.25rem;
  padding: 32px;
  border-radius: 10px;

  img {
    margin-left: 8px;
    height: 9.25rem;
    border-radius: 8px;
  }

  & div > h1 {
    margin: 8px 0;
  }

  & div > p {
    margin-bottom: 24px;
  }

  a {
    margin: 0;
  }

  & > div:last-child {
    position: absolute;
    left: calc(100% - 60px - 32px);
    display: flex;
    gap: 8px;

    width: 60px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 19.2px;
    }
  }
`

export const IssuesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  a {
    overflow: hidden;
    text-decoration: none;
    box-sizing: border-box;

    &:hover {
      outline: 2px solid ${(props) => props.theme['base-label']};
      border-radius: 10px;
    }
  }
`

export const InfosContainer = styled.div`
  display: flex;
  gap: 24px;

  div {
    display: flex;
    align-items: center;

    svg {
      margin-right: 8px;
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const FormContainer = styled.div`
  margin-top: 72px;
  margin-bottom: 48px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 12px;
  }

  input {
    font-size: 1rem;
    width: 100%;
    border-radius: 6px;
    padding: 12px 16px;
    background: ${(props) => props.theme['base-input']};
    border: 0;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`
