import * as React from 'react';
import { Feedback } from '../../../lib/types';

export default function OneFeedback({ msg }: { msg: Feedback }) {
  return (
    <div>
      <p>{msg.name}</p>
      <p>{msg.email}</p>
      <p>{msg.message}</p>
    </div>
  );
}
