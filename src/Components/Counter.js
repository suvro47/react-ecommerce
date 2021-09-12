function Counter({ count }) {
  return (
    <>
      <div>
        <button class="font-black ml-12 rounded-full h-8 w-8 bg-gradient-to-r from-purple-500 to-purple-900 text-base">
          +
        </button>
        <div class="text-2xl ml-4 inline text-white">{count}</div>
        <button class="font-black ml-4 rounded-full h-8 w-8 bg-gradient-to-r from-purple-500 to-purple-900 text-base">
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
