import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const ITEMS_STORAGE_KEY = "@COMPRAR:ITEMS";
const STATUS_STORAGE_KEY = "@COMPRAR:STATUS";

export type ItemStorage = {
  id: string;
  status: FilterStatus;
  description: string;
};

async function get(): Promise<ItemStorage[]> {
  try {
    const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);
    return storage ? JSON.parse(storage) : [];
  } catch (e) {
    throw new Error(`ITEMS_GET ${e}`);
  }
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
  const items = await get();
  return items.filter((item) => item.status === status);
}

async function save(items: ItemStorage[]): Promise<void> {
  try {
    await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    throw new Error(`ITEMS_SAVE ${e}`);
  }
}

async function add(item: ItemStorage): Promise<ItemStorage[]> {
  const items = await get();
  const updatedItems = [...items, item];

  await save(updatedItems);

  return updatedItems;
}

async function remove(id: string): Promise<void> {
  const items = await get();
  const updatedItems = items.filter((item) => item.id !== id);
  await save(updatedItems);
}

async function removeAll(): Promise<void> {
  try {
    await AsyncStorage.removeItem(ITEMS_STORAGE_KEY);
  } catch (e) {
    throw new Error(`ITEMS_REMOVE_ALL, ${e}`);
  }
}

async function toggleStatus(id: string): Promise<void> {
  const items = await get();

  const updatedItems: ItemStorage[] = items.map((item) =>
    item.id === id
      ? {
          ...item,
          status:
            item.status === FilterStatus.PENDING
              ? FilterStatus.DONE
              : FilterStatus.PENDING,
        }
      : item
  );

  await save(updatedItems);
}

export const itemsStorage = {
  get,
  getByStatus,
  add,
  remove,
  removeAll,
  toggleStatus,
};
