import { sampleMessages } from './data';

export function ChatMessageList() {
  return (
    <div className="flex-1 space-y-4 overflow-y-auto px-5 py-6 sm:px-6">
      {sampleMessages.map((message, index) => (
        <div
          key={message.id}
          className={`flex opacity-0 [animation:messageIn_430ms_cubic-bezier(0.22,1,0.36,1)_forwards] ${
            message.mine ? 'justify-end' : 'justify-start'
          }`}
          style={{ animationDelay: `${index * 90}ms` }}
        >
          <article
            className={`max-w-[92%] rounded-2xl border px-4 py-3 text-sm leading-relaxed shadow-sm sm:max-w-[78%] ${
              message.mine
                ? 'border-slate-900 bg-slate-900 text-white'
                : 'border-slate-200 bg-white text-slate-700'
            }`}
          >
            <p
              className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
                message.mine ? 'text-slate-300' : 'text-slate-400'
              }`}
            >
              {message.user} {message.time}
            </p>
            <p className="mt-2">{message.text}</p>
          </article>
        </div>
      ))}
    </div>
  );
}
