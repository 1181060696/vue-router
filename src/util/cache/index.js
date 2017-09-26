/**
 * Created by gexuhui on 17/9/26.
 */
import DefaultCache from './default-cache'
let DbTypes = {
  DEF: 'default'
}

/**
 *缓存适配器
 */
class CacheAdapter {
  constructor(dbName) {
    this.dbName = dbName;
    if (dbName === DbTypes.DEF) {
      this.db = new DefaultCache();
    }
  }
  get(key) {
    if (this.dbName === DbTypes.DEF) {
      return this.db.get(key);
    }
  }
  remove(key) {
    if (this.dbName === DbTypes.DEF) {
      return this.db.remove(key);
    }
  }
  set(key, value) {
    if (this.dbName === DbTypes.DEF) {
      return this.db.set(key, value);
    }
  }
  clear() {
    if (this.dbName === DbTypes.DEF) {
      return this.db.clear()
    }
  }
}

export default new CacheAdapter(DbTypes.DEF)
