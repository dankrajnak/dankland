import * as React from "react";

export interface Props {
  title: string;
  description: React.ReactNode;
  background: React.ReactNode;
  width: number;
  height: number;
  shadowAmount?: number | null;
}

const Card = (props: Props) => {
  //Calculate shadow amount
  let shadow = 1;
  if (props.shadowAmount != null) {
    shadow = Math.min(Math.max(0, props.shadowAmount), 1);
  }
  return (
    <div className="wrapper">
      {/* 
      // @ts-ignore */}
      <div className="cardWrapper">
        <div className="backgroundHolder">{props.background}</div>
      </div>
      <div className="titleHolder">
        {props.title}
        <div className="description">{props.description}</div>
      </div>
      <style jsx>{`
        .titleHolder {
          margin-top: 20px;
          color: #444;
          padding: 0px 10px;
          height: 50px;
          background: white;
          text-align: right;
        }

        .description {
          font-size: 0.8rem;
        }

        .backgroundHolder {
          height: 100%;
          width: 100%;
        }

        .cardWrapper {
          position: relative;
          border-radius: 0;

          transition: box-shadow 0.2s ease-in-out;

          overflow: hidden;
        }

        .cardWrapper:hover {
          box-shadow: 0 8px 10px 0 rgba(100, 100, 100, 0.5);
        }

        .wrapper div:hover {
          cursor: pointer;
        }
      `}</style>
      <style jsx>{`
        .wrapper {
          width: ${props.width}px;
        }
        .cardWrapper {
          height: ${props.height}px;
          boxShadow: 0 ${shadow * 8}px ${
        shadow * 10
      }px 0 rgba(100, 100, 100, 0.5),
    }
        }
      `}</style>
    </div>
  );
};

export default Card;
