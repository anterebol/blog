import { TextArea } from '../TextArea/TextArea';

export const HtmlBlock = ({ id }: { id: string }) => {
  return (
    <div className="html-block">
      <TextArea id={id} />
    </div>
  );
};
