import styled from 'styled-components'

export const IssueContent = styled.section`
  display: flex;

  flex-direction: column;
  background: ${(props) => props.theme['base-post']};
  padding: 32px;
  border-radius: 10px;

  height: 260px;
  width: calc(100%);

  /**É preciso entender como posso aplicar text-overflow: ellipsis aqui. Aqui um bom tutorial: https://semicolon.dev/tutorial/css/text-overflow-ellipsis-doesnt-work */

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
  }

  h2 {
    color: red;
    color: ${(props) => props.theme['base-title']};
  }

  header {
    display: flex;
    gap: 1rem;

    h2 {
      flex: 1;
      margin-bottom: 20px;
    }
  }
`
