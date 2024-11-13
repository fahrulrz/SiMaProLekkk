"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";

interface CommentProps {
  id: number;
  isi_komen: string;
}

const Comment: React.FC<CommentProps> = ({ id, isi_komen }) => {
  return (
    <>
      <Link href={`/home/content?id=${id}`}>
        <div>
          <div className="flex items-center gap-4 py-2">
            <div>
              <FontAwesomeIcon icon={faUser} size="2xl" />
            </div>
            <div>{isi_komen}</div>
            <div className="flex flex-col ml-auto border-b-2">
              <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Comment;
