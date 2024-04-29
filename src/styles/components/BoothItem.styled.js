import styled from 'styled-components';
import Sheet from 'react-modal-sheet';

export const BoothItemLayout = styled.div`
  width: 100%;
  display: flex;
  margin: 2% 0;
`;

export const BoothItemGrayBox = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  width: 80px;
  height: 9vh;
  background-color: gray;
  border-radius: 5px 0 0 5px;
`;

export const BoothItemInfoBox = styled.div`
  flex-grow: 2;
  height: 9vh;
  background-color: white;
  border-radius: 0 5px 5px 0;
`;

export const BoothItemNumberP = styled.p``;

export const CustomSheet = styled(Sheet)`
  .react-modal-sheet-backdrop {
    /* custom styles */
  }
  .react-modal-sheet-container {
    width: ${({ $width }) => `${$width}px`} !important;
    left: ${({ $left }) => `${$left}px`} !important;
    height: ${({ $height }) => `calc(100% - ${$height}px)`} !important;
  }
  .react-modal-sheet-header {
    /* custom styles */
  }
  .react-modal-sheet-drag-indicator {
    /* custom styles */
  }
  .react-modal-sheet-content {
    /* custom styles */
  }
`;