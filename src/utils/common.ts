export function getRandom(start: number, end: number) {
  return Math.floor(Math.random() * (end - start)) + start;
}

export interface TimeStateType {
  state: 'GM' | 'GA' | 'GN';
  msg: string;
}

export function getTimeState(): TimeStateType {
  const date = new Date();
  const hour = date.getHours();
  console.log(hour);

  if (hour >= 6 && hour < 12) {
    return { state: 'GM', msg: '좋은 아침입니다. 아침에는 커피 한 잔으로 시작하는 게 어떨까요?' };
  } else if (hour >= 12 && hour < 21) {
    return { state: 'GA', msg: '좋은 오후입니다. 오후에는 산책을 한 번 갔다오는게 어떨까요?' };
  } else {
    return { state: 'GN', msg: '굿밤입니다. 밤에는 코딩해야죠!' };
  }
}
