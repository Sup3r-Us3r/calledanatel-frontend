import styled from 'styled-components';
import { lighten, darken } from 'polished';

export const ContainerTable = styled.div`
  background: transparent;
  display: inline-block;
  vertical-align: middle;
  min-width: 100%;
  max-height: 100%;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  overflow: auto;
  border-bottom: 1px solid #eef2f7;
  border-radius: 10px;

  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    height: 9px;
    width: 9px;
  }

  &::-webkit-scrollbar-track {
    background: #f9fafb;
  }

  &::-webkit-scrollbar-thumb {
    background: ${darken(0.04, '#eef2f7')};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${darken(0.03, '#edf2f7')};
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  min-width: 100%;

  thead {
    tr {
      th {
        position: sticky;
        top: 0;
        text-align: left;
        font-size: 12px;
        line-height: 16px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 0.8px;
        color: #6b7280;
        padding: 12px 24px;
        background: #f9fafb;
        border-bottom: 1px solid #edf2f7;
      }
    }
  }

  tbody {
    background: #fff;

    tr {
      &:hover {
        background: #f9fafb;
      }

      td {
        padding: 16px 24px;
        white-space: nowrap;
        border-bottom: 1px solid #edf2f7;
        overflow: auto;

        &:not(:last-child) {
          border-right: 2px solid ${lighten(0.02, '#eef2f7')};
        }

        span {
          text-align: left;
          display: inline-flex;
          font-size: 12px;
          line-height: 20px;
          font-weight: 500;
          color: #6b7280;
        }

        svg:hover {
          cursor: pointer;
        }

        svg:nth-child(1):hover {
          stroke: ${darken(0.06, '#7159c1')};
        }

        svg:nth-child(2):hover {
          stroke: ${darken(0.06, '#fc6771')};
        }

        svg:not(:last-child) {
          margin-right: 5px;
        }
      }
    }
  }
`;
