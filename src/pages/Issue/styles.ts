import styled from 'styled-components'

export const PostContainer = styled.div`
  position: relative;
  top: -88px;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme['base-profile']};

  min-height: 10.5rem;
  padding: 32px;
  border-radius: 10px;

  & > div:first-child {
    display: flex;
    justify-content: space-between;

    margin-bottom: 20px;

    a {
      text-decoration: none;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      font-size: 0.75rem;
      line-height: 19.2px;
    }
  }

  & > div:last-child {
    margin-top: 8px;
    display: flex;
    gap: 32px;

    svg {
      margin-right: 8px;
      color: ${(props) => props.theme['base-span']};
    }
  }
`

export const PostContent = styled.section`
  padding: 40px 32px;

  p {
    margin-bottom: 24px;
  }

  pre,
  code {
    font-family: 'Fira Code', sans-serif;
    background: ${(props) => props.theme['base-post']};
  }

  h1 {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-weight: bold;
  }

  img {
    max-width: 100%;
  }
`

export const Code = styled.div`
  background: ${(props) => props.theme['base-post']};
  padding: 16px;
  border-radius: 2px;

  font-family: 'Fira Code', sans-serif;

  p {
    margin-bottom: 0;
  }
`
