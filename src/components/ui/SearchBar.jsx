import { searchIcon } from "../../assets";

function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center justify-between h-10 md:h-13 w-[88%] bg-white shadow-[12px] rounded-2xl px-3 md:px-5 overflow-hidden">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Procure aqui..."
        className="flex-1 min-w-0 text-base md:text-xl text-black outline-none px-2 md:indent-5"
      />
      <img
        src={searchIcon}
        alt="Icone de Pesquisa"
        className="w-5 h-5 md:w-8 md:h-8 flex-shrink-0 ml-2"
      />
    </div>
  );
}

export default SearchBar;
