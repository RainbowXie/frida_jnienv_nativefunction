
## When to use
only if U cann't use `Java.vm.getEnv()` or `Java.vm.tryGetEnv()`
## Usage
### Above frida 16
```js 
import * as jnienv from '../frida_jnienv_nativefunction/lib/index';

// get JNIEnv pointer by Urself
var penv = new jnienv.JNIEnv(params[0]);
const bytes = env.GetByteArrayElements(params[0], params[2], ptr(0));
```