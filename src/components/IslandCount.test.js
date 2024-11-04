import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import IslandCount from './IslandCount';

describe('IslandCount', () => {
  test('returns 0 for an empty grid', () => {
    const { container } = render(<IslandCount grid={[]} />);
    expect(container).toHaveTextContent('0');
  });

  test('counts a single island correctly', () => {
    const grid = [
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0]
    ];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(1);
  });

  test('counts multiple islands correctly', () => {
    const grid = [
      [1, 1, 0, 0],
      [1, 0, 0, 1],
      [0, 0, 1, 1],
      [0, 0, 0, 0]
    ];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(2);
  });

  test('returns 0 for a grid with no islands', () => {
    const grid = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0]
    ];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(0);
  });

  test('handles a single cell grid correctly', () => {
    const grid = [[1]];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(1);
  });

  test('handles a grid with a single row correctly', () => {
    const grid = [[1, 0, 1, 1, 0, 1]];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(3);
  });

  test('handles a grid with a single column correctly', () => {
    const grid = [[1], [0], [1], [1], [0], [1]];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(3);
  });

  test('counts diagonal islands on one diagonals correctly', () => {
    const grid = [
      [0, 0, 1],
      [0, 1, 0],
      [1, 0, 0]
    ];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(3);
  });

  test('counts diagonal islands on one diagonals correctly', () => {
    const grid = [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(3);
  });

  test('counts diagonal islands on both diagonals correctly', () => {
    const grid = [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1]
    ];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(5);
  });

  test('counts larger islands linked diagonals as independant islands', () => {
    const grid = [
      [1, 1, 0],
      [1, 1, 0],
      [1, 0, 1]
    ];
    const { container } = render(<IslandCount grid={grid} />);
    expect(container).toHaveTextContent(2);
  });
});
