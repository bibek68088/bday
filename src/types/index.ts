import type React from "react";
// Common types used across the application

export interface Photo {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  rotation: number;
  delay: number;
  zIndex: number;
  position: {
    x: number;
    y: number;
  };
  frameColor: string;
  frameStyle: number;
  scaleFactor: number;
}

export interface FormData {
  name: string;
  treat: string;
  vibe: string;
  wish: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}

export interface BirthdayMessage {
  title: string;
  message: string;
  emoji: string;
  animation?: "fadeUp" | "slideIn" | "scale" | "rotate" | "bounce" | "pulse";
  bgColor?: string;
  isFinal?: boolean;
  from?: string;
  theme?: string;
  hideSignature?: boolean;
}

export interface Memory {
  title: string;
  description: string;
}

export interface ButtonStyle {
  from: string;
  to: string;
  hoverFrom: string;
  hoverTo: string;
  shadow: string;
  text: string;
  icon: string;
}

export interface FancyButtonProps {
  onClick: () => void;
  theme?: string;
  label: string;
  icon?: React.ReactNode;
  size?: "small" | "medium" | "large";
  glow?: boolean;
}

export interface BirthdayCardProps {
  onComplete: () => void;
}

export interface BirthdayMessagesProps {
  onComplete: () => void;
}

export interface FinalCelebrationProps {
  name: string;
  from: string;
}
