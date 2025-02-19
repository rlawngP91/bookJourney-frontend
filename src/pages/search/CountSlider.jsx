import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const SliderContainer = styled.div`
  width: 100%;
  padding: 20px 0;
  margin-bottom: 100px;
`;

const Label = styled.div`
  font-size: 16px;
  margin-bottom: 30px;
  color: #000;
  font-family: Pretendard;
  font-size: var(--sds-typography-body-size-small);
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
`;

const SliderTrack = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  background: #e5e7eb;
  border-radius: 2px;
`;

const SliderRange = styled.div`
  position: absolute;
  height: 100%;
  background: #a3c7fa;
  border-radius: 2px;
  left: 0;
  width: ${(props) => props.$percentage}%;
`;

const SliderThumb = styled.div`
  width: 20px;
  height: 20px;
  background: #4f8bff;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${(props) => props.$percentage}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0 0 0 8px rgba(79, 139, 255, 0.1);
  }

  &:active {
    box-shadow: 0 0 0 12px rgba(79, 139, 255, 0.2);
  }
`;

const TicksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

const Tick = styled.div`
  font-size: 14px;
  color: ${(props) => (props.$active ? '#4F8BFF' : '#6B7280')};
`;

const CountSlider = ({ initialValue, onValueChange }) => {
  const [value, setValue] = useState(initialValue);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef(null);

  const ticks = [
    { label: '0 개', value: 0 },
    { label: '10 개', value: 25 },
    { label: '50 개', value: 50 },
    { label: '100 개', value: 75 },
    { label: '전체', value: 100 },
  ];

  useEffect(() => {
    onValueChange?.(value);
  }, [value, onValueChange]);

  const calculatePercentage = (val) => {
    return (val / 100) * 100;
  };

  const percentageToValue = (percentage) => {
    const rawValue = (percentage / 100) * 100;
    let closestTick = ticks[0].value;
    let minDiff = Math.abs(rawValue - ticks[0].value);

    ticks.forEach((tick) => {
      const diff = Math.abs(rawValue - tick.value);
      if (diff < minDiff) {
        minDiff = diff;
        closestTick = tick.value;
      }
    });

    return closestTick;
  };

  const handleMove = (clientX) => {
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    const newValue = percentageToValue(percentage);
    setValue(newValue);
    onValueChange?.(newValue);
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsDragging(true);

    const handleMouseMove = (moveEvent) => {
      if (isDragging) {
        handleMove(moveEvent.clientX);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleTrackClick = (e) => {
    handleMove(e.clientX);
  };

  return (
    <SliderContainer>
      <Label>기록 수</Label>
      <SliderTrack ref={trackRef} onClick={handleTrackClick}>
        <SliderRange $percentage={calculatePercentage(value)} />
        <SliderThumb
          $percentage={calculatePercentage(value)}
          onMouseDown={handleMouseDown}
        />
      </SliderTrack>
      <TicksContainer>
        {ticks.map((tick, index) => (
          <Tick key={index} $active={value === tick.value}>
            {tick.label}
          </Tick>
        ))}
      </TicksContainer>
    </SliderContainer>
  );
};

export default CountSlider;
