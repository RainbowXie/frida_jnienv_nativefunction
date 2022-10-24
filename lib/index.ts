export class JNIEnv {
    private env: NativePointer

    private _GetVersion: NativeFunction<any,any> | undefined;
    private _DefineClass: NativeFunction<any,any> | undefined;
    private _FindClass: NativeFunction<any,any> | undefined;
    private _FromReflectedMethod: NativeFunction<any,any> | undefined;
    private _FromReflectedField: NativeFunction<any,any> | undefined;
    private _ToReflectedMethod: NativeFunction<any,any> | undefined;
    private _GetSuperclass: NativeFunction<any,any> | undefined;
    private _IsAssignableFrom: NativeFunction<any,any> | undefined;
    private _ToReflectedField: NativeFunction<any,any> | undefined;
    private _Throw: NativeFunction<any,any> | undefined;
    private _ThrowNew: NativeFunction<any,any> | undefined;
    private _ExceptionOccurred: NativeFunction<any,any> | undefined;
    private _ExceptionDescribe: NativeFunction<any,any> | undefined;
    private _ExceptionClear: NativeFunction<any,any> | undefined;
    private _FatalError: NativeFunction<any,any> | undefined;
    private _PushLocalFrame: NativeFunction<any,any> | undefined;
    private _PopLocalFrame: NativeFunction<any,any> | undefined;
    private _NewGlobalRef: NativeFunction<any,any> | undefined;
    private _DeleteGlobalRef: NativeFunction<any,any> | undefined;
    private _DeleteLocalRef: NativeFunction<any,any> | undefined;
    private _IsSameObject: NativeFunction<any,any> | undefined;
    private _NewLocalRef: NativeFunction<any,any> | undefined;
    private _EnsureLocalCapacity: NativeFunction<any,any> | undefined;
    private _AllocObject: NativeFunction<any,any> | undefined;
    // NewObject: NativeFunction<any,any> | undefined;
    // NewObjectV: NativeFunction<any,any> | undefined;
    private _NewObjectA: NativeFunction<any,any> | undefined;
    private _GetObjectClass: NativeFunction<any,any> | undefined;
    private _IsInstanceOf: NativeFunction<any,any> | undefined;
    private _GetMethodID: NativeFunction<any,any> | undefined;
    // CallObjectMethod: NativeFunction<any,any> | undefined;
    // CallObjectMethodV: NativeFunction<any,any> | undefined;
    private _CallObjectMethodA: NativeFunction<any,any> | undefined;
    // CallBooleanMethod: NativeFunction<any,any> | undefined;
    // CallBooleanMethodV: NativeFunction<any,any> | undefined;
    private _CallBooleanMethodA: NativeFunction<any,any> | undefined;
    // CallByteMethod: NativeFunction<any,any> | undefined;
    //CallByteMethodV: NativeFunction<any,any> | undefined;
    private _CallByteMethodA: NativeFunction<any,any> | undefined;
    // CallCharMethod: NativeFunction<any,any> | undefined;
    // CallCharMethodV: NativeFunction<any,any> | undefined;
    private _CallCharMethodA: NativeFunction<any,any> | undefined;
    // CallShortMethod: NativeFunction<any,any> | undefined;
    // CallShortMethodV: NativeFunction<any,any> | undefined;
    private _CallShortMethodA: NativeFunction<any,any> | undefined;
    // CallIntMethod: NativeFunction<any,any> | undefined;
    // CallIntMethodV: NativeFunction<any,any> | undefined;
    private _CallIntMethodA: NativeFunction<any,any> | undefined;
    // CallLongMethod: NativeFunction<any,any> | undefined;
    // CallLongMethodV: NativeFunction<any,any> | undefined;
    private _CallLongMethodA: NativeFunction<any,any> | undefined;
    // CallFloatMethod: NativeFunction<any,any> | undefined;
    // CallFloatMethodV: NativeFunction<any,any> | undefined;
    private _CallFloatMethodA: NativeFunction<any,any> | undefined;
    // CallDoubleMethod: NativeFunction<any,any> | undefined;
    // CallDoubleMethodV: NativeFunction<any,any> | undefined;
    private _CallDoubleMethodA: NativeFunction<any,any> | undefined;
    // CallVoidMethod: NativeFunction<any,any> | undefined;
    // CallVoidMethodV: NativeFunction<any,any> | undefined;
    private _CallVoidMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualObjectMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualObjectMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualObjectMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualBooleanMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualBooleanMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualBooleanMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualByteMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualByteMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualByteMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualCharMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualCharMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualCharMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualShortMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualShortMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualShortMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualIntMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualIntMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualIntMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualLongMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualLongMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualLongMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualFloatMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualFloatMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualFloatMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualDoubleMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualDoubleMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualDoubleMethodA: NativeFunction<any,any> | undefined;
    // CallNonvirtualVoidMethod: NativeFunction<any,any> | undefined;
    // CallNonvirtualVoidMethodV: NativeFunction<any,any> | undefined;
    private _CallNonvirtualVoidMethodA: NativeFunction<any,any> | undefined;
    private _GetFieldID: NativeFunction<any,any> | undefined;
    private _GetObjectField: NativeFunction<any,any> | undefined;
    private _GetBooleanField: NativeFunction<any,any> | undefined;
    private _GetByteField: NativeFunction<any,any> | undefined;
    private _GetCharField: NativeFunction<any,any> | undefined;
    private _GetShortField: NativeFunction<any,any> | undefined;
    private _GetIntField: NativeFunction<any,any> | undefined;
    private _GetLongField: NativeFunction<any,any> | undefined;
    private _GetFloatField: NativeFunction<any,any> | undefined;
    private _GetDoubleField: NativeFunction<any,any> | undefined;
    private _SetObjectField: NativeFunction<any,any> | undefined;
    private _SetBooleanField: NativeFunction<any,any> | undefined;
    private _SetByteField: NativeFunction<any,any> | undefined;
    private _SetCharField: NativeFunction<any,any> | undefined;
    private _SetShortField: NativeFunction<any,any> | undefined;
    private _SetIntField: NativeFunction<any,any> | undefined;
    private _SetLongField: NativeFunction<any,any> | undefined;
    private _SetFloatField: NativeFunction<any,any> | undefined;
    private _SetDoubleField: NativeFunction<any,any> | undefined;
    private _GetStaticMethodID: NativeFunction<any,any> | undefined;
    // CallStaticObjectMethod: NativeFunction<any,any> | undefined;
    // CallStaticObjectMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticObjectMethodA: NativeFunction<any,any> | undefined;
    // CallStaticBooleanMethod: NativeFunction<any,any> | undefined;
    // CallStaticBooleanMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticBooleanMethodA: NativeFunction<any,any> | undefined;
    // CallStaticByteMethod: NativeFunction<any,any> | undefined;
    // CallStaticByteMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticByteMethodA: NativeFunction<any,any> | undefined;
    // CallStaticCharMethod: NativeFunction<any,any> | undefined;
    // CallStaticCharMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticCharMethodA: NativeFunction<any,any> | undefined;
    // CallStaticShortMethod: NativeFunction<any,any> | undefined;
    // CallStaticShortMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticShortMethodA: NativeFunction<any,any> | undefined;
    // CallStaticIntMethod: NativeFunction<any,any> | undefined;
    // CallStaticIntMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticIntMethodA: NativeFunction<any,any> | undefined;
    // CallStaticLongMethod: NativeFunction<any,any> | undefined;
    // CallStaticLongMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticLongMethodA: NativeFunction<any,any> | undefined;
    // CallStaticFloatMethod: NativeFunction<any,any> | undefined;
    // CallStaticFloatMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticFloatMethodA: NativeFunction<any,any> | undefined;
    // CallStaticDoubleMethod: NativeFunction<any,any> | undefined;
    // CallStaticDoubleMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticDoubleMethodA: NativeFunction<any,any> | undefined;
    // CallStaticVoidMethod: NativeFunction<any,any> | undefined;
    // CallStaticVoidMethodV: NativeFunction<any,any> | undefined;
    private _CallStaticVoidMethodA: NativeFunction<any,any> | undefined;
    private _GetStaticFieldID: NativeFunction<any,any> | undefined;
    private _GetStaticObjectField: NativeFunction<any,any> | undefined;
    private _GetStaticBooleanField: NativeFunction<any,any> | undefined;
    private _GetStaticByteField: NativeFunction<any,any> | undefined;
    private _GetStaticCharField: NativeFunction<any,any> | undefined;
    private _GetStaticShortField: NativeFunction<any,any> | undefined;
    private _GetStaticIntField: NativeFunction<any,any> | undefined;
    private _GetStaticLongField: NativeFunction<any,any> | undefined;
    private _GetStaticFloatField: NativeFunction<any,any> | undefined;
    private _GetStaticDoubleField: NativeFunction<any,any> | undefined;
    private _SetStaticObjectField: NativeFunction<any,any> | undefined;
    private _SetStaticBooleanField: NativeFunction<any,any> | undefined;
    private _SetStaticByteField: NativeFunction<any,any> | undefined;
    private _SetStaticCharField: NativeFunction<any,any> | undefined;
    private _SetStaticShortField: NativeFunction<any,any> | undefined;
    private _SetStaticIntField: NativeFunction<any,any> | undefined;
    private _SetStaticLongField: NativeFunction<any,any> | undefined;
    private _SetStaticFloatField: NativeFunction<any,any> | undefined;
    private _SetStaticDoubleField: NativeFunction<any,any> | undefined;
    private _NewString: NativeFunction<any,any> | undefined;
    private _GetStringLength: NativeFunction<any,any> | undefined;
    private _GetStringChars: NativeFunction<any,any> | undefined;
    private _ReleaseStringChars: NativeFunction<any,any> | undefined;
    private _NewStringUTF: NativeFunction<any,any> | undefined;
    private _GetStringUTFLength: NativeFunction<any,any> | undefined;
    private _GetStringUTFChars: NativeFunction<any,any> | undefined;
    private _ReleaseStringUTFChars: NativeFunction<any,any> | undefined;
    private _GetArrayLength: NativeFunction<any,any> | undefined;
    private _NewObjectArray: NativeFunction<any,any> | undefined;
    private _GetObjectArrayElement: NativeFunction<any,any> | undefined;
    private _SetObjectArrayElement: NativeFunction<any,any> | undefined;
    private _NewBooleanArray: NativeFunction<any,any> | undefined;
    private _NewByteArray: NativeFunction<any,any> | undefined;
    private _NewCharArray: NativeFunction<any,any> | undefined;
    private _NewShortArray: NativeFunction<any,any> | undefined;
    private _NewIntArray: NativeFunction<any,any> | undefined;
    private _NewLongArray: NativeFunction<any,any> | undefined;
    private _NewFloatArray: NativeFunction<any,any> | undefined;
    private _NewDoubleArray: NativeFunction<any,any> | undefined;
    private _GetBooleanArrayElements: NativeFunction<any,any> | undefined;
    private _GetByteArrayElements: NativeFunction<any,any> | undefined;
    private _GetCharArrayElements: NativeFunction<any,any> | undefined;
    private _GetShortArrayElements: NativeFunction<any,any> | undefined;
    private _GetIntArrayElements: NativeFunction<any,any> | undefined;
    private _GetLongArrayElements: NativeFunction<any,any> | undefined;
    private _GetFloatArrayElements: NativeFunction<any,any> | undefined;
    private _GetDoubleArrayElements: NativeFunction<any,any> | undefined;
    private _ReleaseBooleanArrayElements: NativeFunction<any,any> | undefined;
    private _ReleaseByteArrayElements: NativeFunction<any,any> | undefined;
    private _ReleaseCharArrayElements: NativeFunction<any,any> | undefined;
    private _ReleaseShortArrayElements: NativeFunction<any,any> | undefined;
    private _ReleaseIntArrayElements: NativeFunction<any,any> | undefined;
    private _ReleaseLongArrayElements: NativeFunction<any,any> | undefined;
    private _ReleaseFloatArrayElements: NativeFunction<any,any> | undefined;
    private _ReleaseDoubleArrayElements: NativeFunction<any,any> | undefined;
    private _GetBooleanArrayRegion: NativeFunction<any,any> | undefined;
    private _GetByteArrayRegion: NativeFunction<any,any> | undefined;
    private _GetCharArrayRegion: NativeFunction<any,any> | undefined;
    private _GetShortArrayRegion: NativeFunction<any,any> | undefined;
    private _GetIntArrayRegion: NativeFunction<any,any> | undefined;
    private _GetLongArrayRegion: NativeFunction<any,any> | undefined;
    private _GetFloatArrayRegion: NativeFunction<any,any> | undefined;
    private _GetDoubleArrayRegion: NativeFunction<any,any> | undefined;
    private _SetBooleanArrayRegion: NativeFunction<any,any> | undefined;
    private _SetByteArrayRegion: NativeFunction<any,any> | undefined;
    private _SetCharArrayRegion: NativeFunction<any,any> | undefined;
    private _SetShortArrayRegion: NativeFunction<any,any> | undefined;
    private _SetIntArrayRegion: NativeFunction<any,any> | undefined;
    private _SetLongArrayRegion: NativeFunction<any,any> | undefined;
    private _SetFloatArrayRegion: NativeFunction<any,any> | undefined;
    private _SetDoubleArrayRegion: NativeFunction<any,any> | undefined;
    private _RegisterNatives: NativeFunction<any,any> | undefined;
    private _UnregisterNatives: NativeFunction<any,any> | undefined;
    private _MonitorEnter: NativeFunction<any,any> | undefined;
    private _MonitorExit: NativeFunction<any,any> | undefined;
    private _GetJavaVM: NativeFunction<any,any> | undefined;
    private _GetStringRegion: NativeFunction<any,any> | undefined;
    private _GetStringUTFRegion: NativeFunction<any,any> | undefined;
    private _GetPrimitiveArrayCritical: NativeFunction<any,any> | undefined;
    private _ReleasePrimitiveArrayCritical: NativeFunction<any,any> | undefined;
    private _GetStringCritical: NativeFunction<any,any> | undefined;
    private _ReleaseStringCritical: NativeFunction<any,any> | undefined;
    private _NewWeakGlobalRef: NativeFunction<any,any> | undefined;
    private _DeleteWeakGlobalRef: NativeFunction<any,any> | undefined;
    private _ExceptionCheck: NativeFunction<any,any> | undefined;
    private _NewDirectByteBuffer: NativeFunction<any,any> | undefined;
    private _GetDirectBufferAddress: NativeFunction<any,any> | undefined;
    private _GetDirectBufferCapacity: NativeFunction<any,any> | undefined;
    private _GetObjectRefType: NativeFunction<any,any> | undefined;


    constructor(env: NativePointer) {
        this.env = env;
    }

    get GetVersion(): NativeFunction<any,any> {
        if (this._GetVersion === undefined) {
            this._GetVersion = new NativeFunction(
                this.env.readPointer().add(4 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer"]
            );
        }
        return this._GetVersion;
    }

    get DefineClass(): NativeFunction<any,any> {
        if (this._DefineClass === undefined) {
            this._DefineClass = new NativeFunction(
                this.env.readPointer().add(5 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._DefineClass;
    }

    get FindClass(): NativeFunction<any,any> {
        if (this._FindClass === undefined) {
            this._FindClass = new NativeFunction(
                this.env.readPointer().add(6 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._FindClass;
    }

    get FromReflectedMethod(): NativeFunction<any,any> {
        if (this._FromReflectedMethod === undefined) {
            this._FromReflectedMethod = new NativeFunction(
                this.env.readPointer().add(7 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._FromReflectedMethod;
    }

    get FromReflectedField(): NativeFunction<any,any> {
        if (this._FromReflectedField === undefined) {
            this._FromReflectedField = new NativeFunction(
                this.env.readPointer().add(8 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._FromReflectedField;
    }

    get ToReflectedMethod(): NativeFunction<any,any> {
        if (this._ToReflectedMethod === undefined) {
            this._ToReflectedMethod = new NativeFunction(
                this.env.readPointer().add(9 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "bool"]
            );
        }
        return this._ToReflectedMethod;
    }

    get GetSuperclass(): NativeFunction<any,any> {
        if (this._GetSuperclass === undefined) {
            this._GetSuperclass = new NativeFunction(
                this.env.readPointer().add(10 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._GetSuperclass;
    }

    get IsAssignableFrom(): NativeFunction<any,any> {
        if (this._IsAssignableFrom === undefined) {
            this._IsAssignableFrom = new NativeFunction(
                this.env.readPointer().add(11 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._IsAssignableFrom;
    }

    get ToReflectedField(): NativeFunction<any,any> {
        if (this._ToReflectedField === undefined) {
            this._ToReflectedField = new NativeFunction(
                this.env.readPointer().add(12 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer", "bool"]
            );
        }
        return this._ToReflectedField;
    }

    get Throw(): NativeFunction<any,any> {
        if (this._Throw === undefined) {
            this._Throw = new NativeFunction(
                this.env.readPointer().add(13 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._Throw;
    }

    get ThrowNew(): NativeFunction<any,any> {
        if (this._ThrowNew === undefined) {
            this._ThrowNew = new NativeFunction(
                this.env.readPointer().add(14 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._ThrowNew;
    }

    get ExceptionOccurred(): NativeFunction<any,any> {
        if (this._ExceptionOccurred === undefined) {
            this._ExceptionOccurred = new NativeFunction(
                this.env.readPointer().add(15 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer"]
            );
        }
        return this._ExceptionOccurred;
    }

    get ExceptionDescribe(): NativeFunction<any,any> {
        if (this._ExceptionDescribe === undefined) {
            this._ExceptionDescribe = new NativeFunction(
                this.env.readPointer().add(16 * Process.pointerSize).readPointer(),
                "void",
                ["pointer"]
            );
        }
        return this.ExceptionDescribe;
    }

    get ExceptionClear(): NativeFunction<any,any> {
        if (this._ExceptionClear === undefined) {
            this._ExceptionClear = new NativeFunction(
                this.env.readPointer().add(17 * Process.pointerSize).readPointer(),
                "void",
                ["pointer"]
            );
        }
        return this._ExceptionClear;
    }

    get FatalError(): NativeFunction<any,any> {
        if (this._FatalError === undefined) {
            this._FatalError = new NativeFunction(
                this.env.readPointer().add(18 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer"]
            );
        }
        return this._FatalError;
    }

    get PushLocalFrame(): NativeFunction<any,any> {
        if (this._PushLocalFrame === undefined) {
            this._PushLocalFrame = new NativeFunction(
                this.env.readPointer().add(19 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "int32"]
            );
        }
        return this.PushLocalFrame;
    }

    get PopLocalFrame(): NativeFunction<any,any> {
        if (this._PopLocalFrame === undefined) {
            this._PopLocalFrame = new NativeFunction(
                this.env.readPointer().add(20 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._PopLocalFrame;
    }

    get NewGlobalRef(): NativeFunction<any,any> {
        if (this._NewGlobalRef === undefined) {
            this._NewGlobalRef = new NativeFunction(
                this.env.readPointer().add(21 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._NewGlobalRef;
    }

    get DeleteGlobalRef(): NativeFunction<any,any> {
        if (this._DeleteGlobalRef === undefined) {
            this._DeleteGlobalRef = new NativeFunction(
                this.env.readPointer().add(22 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer"]
            );
        }
        return this._DeleteGlobalRef;
    }

    get DeleteLocalRef(): NativeFunction<any,any> {
        if (this._DeleteLocalRef === undefined) {
            this._DeleteLocalRef = new NativeFunction(
                this.env.readPointer().add(23 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer"]
            );
        }
        return this._DeleteLocalRef;
    }

    get IsSameObject(): NativeFunction<any,any> {
        if (this._IsSameObject === undefined) {
            this._IsSameObject = new NativeFunction(
                this.env.readPointer().add(24 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._IsSameObject;
    }

    get NewLocalRef(): NativeFunction<any,any> {
        if (this._NewLocalRef === undefined) {
            this._NewLocalRef = new NativeFunction(
                this.env.readPointer().add(25 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._NewLocalRef;
    }

    get EnsureLocalCapacity(): NativeFunction<any,any> {
        if (this._EnsureLocalCapacity === undefined) {
            this._EnsureLocalCapacity = new NativeFunction(
                this.env.readPointer().add(26 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "int32"]
            );
        }
        return this._EnsureLocalCapacity;
    }

    get AllocObject(): NativeFunction<any,any> {
        if (this._AllocObject === undefined) {
            this._AllocObject = new NativeFunction(
                this.env.readPointer().add(27 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._AllocObject;
    }

    get NewObjectA(): NativeFunction<any,any> {
        if (this._NewObjectA === undefined) {
            this._NewObjectA = new NativeFunction(
                this.env.readPointer().add(30 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._NewObjectA;
    }

    get GetObjectClass(): NativeFunction<any,any> {
        if (this._GetObjectClass === undefined) {
            this._GetObjectClass = new NativeFunction(
                this.env.readPointer().add(31 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._GetObjectClass;
    }

    get IsInstanceOf(): NativeFunction<any,any> {
        if (this._IsInstanceOf === undefined) {
            this._IsInstanceOf = new NativeFunction(
                this.env.readPointer().add(32 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._IsInstanceOf;
    }

    get GetMethodID(): NativeFunction<any,any> {
        if (this._GetMethodID === undefined) {
            this._GetMethodID = new NativeFunction(
                this.env.readPointer().add(33 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._GetMethodID;
    }

    get CallObjectMethodA(): NativeFunction<any,any> {
        if (this._CallObjectMethodA === undefined) {
            this._CallObjectMethodA = new NativeFunction(
                this.env.readPointer().add(36 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallObjectMethodA;
    }

    get CallBooleanMethodA(): NativeFunction<any,any> {
        if (this._CallBooleanMethodA === undefined) {
            this._CallBooleanMethodA = new NativeFunction(
                this.env.readPointer().add(39 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallBooleanMethodA;
    }

    get CallByteMethodA(): NativeFunction<any,any> {
        if (this._CallByteMethodA === undefined) {
            this._CallByteMethodA = new NativeFunction(
                this.env.readPointer().add(42 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallByteMethodA;
    }

    get CallCharMethodA(): NativeFunction<any,any> {
        if (this._CallCharMethodA === undefined) {
            this._CallCharMethodA = new NativeFunction(
                this.env.readPointer().add(45 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallCharMethodA;
    }

    get CallShortMethodA(): NativeFunction<any,any> {
        if (this._CallShortMethodA === undefined) {
            this._CallShortMethodA = new NativeFunction(
                this.env.readPointer().add(48 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallShortMethodA;
    }

    get CallIntMethodA(): NativeFunction<any,any> {
        if (this._CallIntMethodA === undefined) {
            this._CallIntMethodA = new NativeFunction(
                this.env.readPointer().add(51 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallIntMethodA;
    }

    get CallLongMethodA(): NativeFunction<any,any> {
        if (this._CallLongMethodA === undefined) {
            this._CallLongMethodA = new NativeFunction(
                this.env.readPointer().add(54 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallLongMethodA;
    }

    get CallFloatMethodA(): NativeFunction<any,any> {
        if (this._CallFloatMethodA === undefined) {
            this._CallFloatMethodA = new NativeFunction(
                this.env.readPointer().add(57 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallFloatMethodA;
    }

    get CallDoubleMethodA(): NativeFunction<any,any> {
        if (this._CallDoubleMethodA === undefined) {
            this._CallDoubleMethodA = new NativeFunction(
                this.env.readPointer().add(60 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallDoubleMethodA;
    }

    get CallVoidMethodA(): NativeFunction<any,any> {
        if (this._CallVoidMethodA === undefined) {
            this._CallVoidMethodA = new NativeFunction(
                this.env.readPointer().add(63 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallVoidMethodA;
    }

    get CallNonvirtualObjectMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualObjectMethodA === undefined) {
            this._CallNonvirtualObjectMethodA = new NativeFunction(
                this.env.readPointer().add(66 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualObjectMethodA;
    }

    get CallNonvirtualBooleanMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualBooleanMethodA === undefined) {
            this._CallNonvirtualBooleanMethodA = new NativeFunction(
                this.env.readPointer().add(69 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualBooleanMethodA;
    }

    get CallNonvirtualByteMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualByteMethodA === undefined) {
            this._CallNonvirtualByteMethodA = new NativeFunction(
                this.env.readPointer().add(72 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualByteMethodA;
    }

    get CallNonvirtualCharMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualCharMethodA === undefined) {
            this._CallNonvirtualCharMethodA = new NativeFunction(
                this.env.readPointer().add(75 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualCharMethodA;
    }

    get CallNonvirtualShortMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualShortMethodA === undefined) {
            this._CallNonvirtualShortMethodA = new NativeFunction(
                this.env.readPointer().add(78 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer", "pointer"]
            )
        }
        return this._CallNonvirtualShortMethodA;
    }

    get CallNonvirtualIntMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualIntMethodA === undefined) {
            this._CallNonvirtualIntMethodA = new NativeFunction(
                this.env.readPointer().add(81 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualIntMethodA;
    }

    get CallNonvirtualLongMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualLongMethodA === undefined) {
            this._CallNonvirtualLongMethodA = new NativeFunction(
                this.env.readPointer().add(84 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualLongMethodA;
    }

    get CallNonvirtualFloatMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualFloatMethodA === undefined) {
            this._CallNonvirtualFloatMethodA = new NativeFunction(
                this.env.readPointer().add(87 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualFloatMethodA;
    }

    get CallNonvirtualDoubleMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualDoubleMethodA === undefined) {
            this._CallNonvirtualDoubleMethodA = new NativeFunction(
                this.env.readPointer().add(90 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualDoubleMethodA;
    }

    get CallNonvirtualVoidMethodA(): NativeFunction<any,any> {
        if (this._CallNonvirtualVoidMethodA === undefined) {
            this._CallNonvirtualVoidMethodA = new NativeFunction(
                this.env.readPointer().add(93 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallNonvirtualVoidMethodA;
    }

    get GetFieldID(): NativeFunction<any,any> {
        if (this._GetFieldID === undefined) {
            this._GetFieldID = new NativeFunction(
                this.env.readPointer().add(94 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._GetFieldID;
    }

    get GetObjectField(): NativeFunction<any,any> {
        if (this._GetObjectField === undefined) {
            this._GetObjectField = new NativeFunction(
                this.env.readPointer().add(95 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetObjectField;
    }

    get GetBooleanField(): NativeFunction<any,any> {
        if (this._GetBooleanField === undefined) {
            this._GetBooleanField = new NativeFunction(
                this.env.readPointer().add(96 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetBooleanField;
    }

    get GetByteField(): NativeFunction<any,any> {
        if (this._GetByteField === undefined) {
            this._GetByteField = new NativeFunction(
                this.env.readPointer().add(97 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetByteField;
    }

    get GetCharField(): NativeFunction<any,any> {
        if (this._GetCharField === undefined) {
            this._GetCharField = new NativeFunction(
                this.env.readPointer().add(98 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetCharField;
    }

    get GetShortField(): NativeFunction<any,any> {
        if (this._GetShortField === undefined) {
            this._GetShortField = new NativeFunction(
                this.env.readPointer().add(99 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetShortField;
    }

    get GetIntField(): NativeFunction<any,any> {
        if (this._GetIntField === undefined) {
            this._GetIntField = new NativeFunction(
                this.env.readPointer().add(100 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetIntField;
    }

    get GetLongField(): NativeFunction<any,any> {
        if (this._GetLongField === undefined) {
            this._GetLongField = new NativeFunction(
                this.env.readPointer().add(101 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetLongField;
    }

    get GetFloatField(): NativeFunction<any,any> {
        if (this._GetFloatField === undefined) {
            this._GetFloatField = new NativeFunction(
                this.env.readPointer().add(102 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetFloatField;
    }

    get GetDoubleField(): NativeFunction<any,any> {
        if (this._GetDoubleField === undefined) {
            this._GetDoubleField = new NativeFunction(
                this.env.readPointer().add(103 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetDoubleField;
    }

    get SetObjectField(): NativeFunction<any,any> {
        if (this._SetObjectField === undefined) {
            this._SetObjectField = new NativeFunction(
                this.env.readPointer().add(104 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._SetObjectField;
    }

    get SetBooleanField(): NativeFunction<any,any> {
        if (this._SetBooleanField === undefined) {
            this._SetBooleanField = new NativeFunction(
                this.env.readPointer().add(105 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "bool"]
            );
        }
        return this.SetBooleanField;
    }

    get SetByteField(): NativeFunction<any,any> {
        if (this._SetByteField === undefined) {
            this._SetByteField = new NativeFunction(
                this.env.readPointer().add(106 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int8"]
            );
        }
        return this._SetByteField;
    }

    get SetCharField(): NativeFunction<any,any> {
        if (this._SetCharField === undefined) {
            this._SetCharField = new NativeFunction(
                this.env.readPointer().add(107 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "uint16"]
            );
        }
        return this._SetCharField;
    }

    get SetShortField(): NativeFunction<any,any> {
        if (this._SetShortField === undefined) {
            this._SetShortField = new NativeFunction(
                this.env.readPointer().add(108 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int16"]
            );
        }
        return this._SetShortField;
    }

    get SetIntField(): NativeFunction<any,any> {
        if (this._SetIntField === undefined) {
            this._SetIntField = new NativeFunction(
                this.env.readPointer().add(109 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._SetIntField;
    }

    get SetLongField(): NativeFunction<any,any> {
        if (this._SetLongField === undefined) {
            this._SetLongField = new NativeFunction(
                this.env.readPointer().add(110 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int64"]
            );
        }
        return this._SetLongField;
    }

    get SetFloatField(): NativeFunction<any,any> {
        if (this._SetFloatField === undefined) {
            this._SetFloatField = new NativeFunction(
                this.env.readPointer().add(111 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "float"]
            );
        }
        return this._SetFloatField;
    }

    get SetDoubleField(): NativeFunction<any,any> {
        if (this._SetDoubleField === undefined) {
            this._SetDoubleField = new NativeFunction(
                this.env.readPointer().add(112 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "double"]
            );
        }
        return this._SetDoubleField;
    }

    get GetStaticMethodID(): NativeFunction<any,any> {
        if (this._GetStaticMethodID === undefined) {
            this._GetStaticMethodID = new NativeFunction(
                this.env.readPointer().add(113 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticMethodID;
    }

    get CallStaticObjectMethodA(): NativeFunction<any,any> {
        if (this._CallStaticObjectMethodA === undefined) {
            this._CallStaticObjectMethodA = new NativeFunction(
                this.env.readPointer().add(116 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticObjectMethodA;
    }

    get CallStaticBooleanMethodA(): NativeFunction<any,any> {
        if (this._CallStaticBooleanMethodA === undefined) {
            this._CallStaticBooleanMethodA = new NativeFunction(
                this.env.readPointer().add(119 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticBooleanMethodA;
    }

    get CallStaticByteMethodA(): NativeFunction<any,any> {
        if (this._CallStaticByteMethodA === undefined) {
            this._CallStaticByteMethodA = new NativeFunction(
                this.env.readPointer().add(122 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticByteMethodA;
    }

    get CallStaticCharMethodA(): NativeFunction<any,any> {
        if (this._CallStaticCharMethodA === undefined) {
            this._CallStaticCharMethodA = new NativeFunction(
                this.env.readPointer().add(125 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticCharMethodA;
    }

    get CallStaticShortMethodA(): NativeFunction<any,any> {
        if (this._CallStaticShortMethodA === undefined) {
            this._CallStaticShortMethodA = new NativeFunction(
                this.env.readPointer().add(128 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticShortMethodA;
    }

    get CallStaticIntMethodA(): NativeFunction<any,any> {
        if (this._CallStaticIntMethodA === undefined) {
            this._CallStaticIntMethodA = new NativeFunction(
                this.env.readPointer().add(131 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticIntMethodA;
    }

    get CallStaticLongMethodA(): NativeFunction<any,any> {
        if (this._CallStaticLongMethodA === undefined) {
            this._CallStaticLongMethodA = new NativeFunction(
                this.env.readPointer().add(134 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticLongMethodA;
    }

    get CallStaticFloatMethodA(): NativeFunction<any,any> {
        if (this._CallStaticFloatMethodA === undefined) {
            this._CallStaticFloatMethodA = new NativeFunction(
                this.env.readPointer().add(137 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticFloatMethodA;
    }

    get CallStaticDoubleMethodA(): NativeFunction<any,any> {
        if (this._CallStaticDoubleMethodA === undefined) {
            this._CallStaticDoubleMethodA = new NativeFunction(
                this.env.readPointer().add(140 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticDoubleMethodA;
    }

    get CallStaticVoidMethodA(): NativeFunction<any,any> {
        if (this._CallStaticVoidMethodA === undefined) {
            this._CallStaticVoidMethodA = new NativeFunction(
                this.env.readPointer().add(143 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._CallStaticVoidMethodA;
    }

    get GetStaticFieldID(): NativeFunction<any,any> {
        if (this._GetStaticFieldID === undefined) {
            this._GetStaticFieldID = new NativeFunction(
                this.env.readPointer().add(144 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticFieldID;
    }

    get GetStaticObjectField(): NativeFunction<any,any> {
        if (this._GetStaticObjectField === undefined) {
            this._GetStaticObjectField = new NativeFunction(
                this.env.readPointer().add(145 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticObjectField;
    }

    get GetStaticBooleanField(): NativeFunction<any,any> {
        if (this._GetStaticBooleanField === undefined) {
            this._GetStaticBooleanField = new NativeFunction(
                this.env.readPointer().add(146 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticBooleanField;
    }

    get GetStaticByteField(): NativeFunction<any,any> {
        if (this._GetStaticByteField === undefined) {
            this._GetStaticByteField = new NativeFunction(
                this.env.readPointer().add(147 * Process.pointerSize).readPointer(),
                "int8",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticByteField;
    }

    get GetStaticCharField(): NativeFunction<any,any> {
        if (this._GetStaticCharField === undefined) {
            this._GetStaticCharField = new NativeFunction(
                this.env.readPointer().add(148 * Process.pointerSize).readPointer(),
                "uint16",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticCharField;
    }

    get GetStaticShortField(): NativeFunction<any,any> {
        if (this._GetStaticShortField === undefined) {
            this._GetStaticShortField = new NativeFunction(
                this.env.readPointer().add(149 * Process.pointerSize).readPointer(),
                "int16",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticShortField;
    }

    get GetStaticIntField(): NativeFunction<any,any> {
        if (this._GetStaticIntField === undefined) {
            this._GetStaticIntField = new NativeFunction(
                this.env.readPointer().add(150 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticIntField;
    }


    get GetStaticLongField(): NativeFunction<any,any> {
        if (this._GetStaticLongField === undefined) {
            this._GetStaticLongField = new NativeFunction(
                this.env.readPointer().add(151 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticLongField;
    }

    get GetStaticFloatField(): NativeFunction<any,any> {
        if (this._GetStaticFloatField === undefined) {
            this._GetStaticFloatField = new NativeFunction(
                this.env.readPointer().add(152 * Process.pointerSize).readPointer(),
                "float",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticFloatField;
    }

    get GetStaticDoubleField(): NativeFunction<any,any> {
        if (this._GetStaticDoubleField === undefined) {
            this._GetStaticDoubleField = new NativeFunction(
                this.env.readPointer().add(153 * Process.pointerSize).readPointer(),
                "double",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStaticDoubleField;
    }

    get SetStaticObjectField(): NativeFunction<any,any> {
        if (this._SetStaticObjectField === undefined) {
            this._SetStaticObjectField = new NativeFunction(
                this.env.readPointer().add(154 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "pointer"]
            );
        }
        return this._SetStaticObjectField;
    }

    get SetStaticBooleanField(): NativeFunction<any,any> {
        if (this._SetStaticBooleanField === undefined) {
            this._SetStaticBooleanField = new NativeFunction(
                this.env.readPointer().add(155 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "bool"]
            );
        }
        return this._SetStaticBooleanField;
    }

    get SetStaticByteField(): NativeFunction<any,any> {
        if (this._SetStaticByteField === undefined) {
            this._SetStaticByteField = new NativeFunction(
                this.env.readPointer().add(156 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int8"]
            );
        }
        return this._SetStaticByteField;
    }

    get SetStaticCharField(): NativeFunction<any,any> {
        if (this._SetStaticCharField === undefined) {
            this._SetStaticCharField = new NativeFunction(
                this.env.readPointer().add(157 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "uint16"]
            );
        }
        return this._SetStaticCharField;
    }

    get SetStaticShortField(): NativeFunction<any,any> {
        if (this._SetStaticShortField === undefined) {
            this._SetStaticShortField = new NativeFunction(
                this.env.readPointer().add(158 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int16"]
            );
        }
        return this._SetStaticShortField;
    }

    get SetStaticIntField(): NativeFunction<any,any> {
        if (this._SetStaticIntField === undefined) {
            this._SetStaticIntField = new NativeFunction(
                this.env.readPointer().add(159 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._SetStaticIntField;
    }

    get SetStaticLongField(): NativeFunction<any,any> {
        if (this._SetStaticLongField === undefined) {
            this._SetStaticLongField = new NativeFunction(
                this.env.readPointer().add(160 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int64"]
            );
        }
        return this._SetStaticLongField;
    }

    get SetStaticFloatField(): NativeFunction<any,any> {
        if (this._SetStaticFloatField === undefined) {
            this._SetStaticFloatField = new NativeFunction(
                this.env.readPointer().add(161 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "float"]
            );
        }
        return this._SetStaticFloatField;
    }

    get SetStaticDoubleField(): NativeFunction<any,any> {
        if (this._SetStaticDoubleField === undefined) {
            this._SetStaticDoubleField = new NativeFunction(
                this.env.readPointer().add(162 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "double"]
            );
        }
        return this._SetStaticDoubleField;
    }

    get NewString(): NativeFunction<any,any> {
        if (this._NewString === undefined) {
            this._NewString = new NativeFunction(
                this.env.readPointer().add(163 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "int32"]
            );
        }
        return this._NewString;
    }

    get GetStringLength(): NativeFunction<any,any> {
        if (this._GetStringLength === undefined) {
            this._GetStringLength = new NativeFunction(
                this.env.readPointer().add(164 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._GetStringLength;
    }

    get GetStringChars(): NativeFunction<any,any> {
        if (this._GetStringChars === undefined) {
            this._GetStringChars = new NativeFunction(
                this.env.readPointer().add(165 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStringChars;
    }

    get ReleaseStringChars(): NativeFunction<any,any> {
        if (this._ReleaseStringChars === undefined) {
            this._ReleaseStringChars = new NativeFunction(
                this.env.readPointer().add(166 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._ReleaseStringChars;
    }

    get NewStringUTF(): NativeFunction<any,any> {
        if (this._NewStringUTF === undefined) {
            this._NewStringUTF = new NativeFunction(
                this.env.readPointer().add(167 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._NewStringUTF;
    }

    get GetStringUTFLength(): NativeFunction<any,any> {
        if (this._GetStringUTFLength === undefined) {
            this._GetStringUTFLength = new NativeFunction(
                this.env.readPointer().add(168 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._GetStringUTFLength;
    }

    get GetStringUTFChars(): NativeFunction<any,any> {
        if (this._GetStringUTFChars === undefined) {
            this._GetStringUTFChars = new NativeFunction(
                this.env.readPointer().add(169 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStringUTFChars;
    }

    get ReleaseStringUTFChars(): NativeFunction<any,any> {
        if (this._ReleaseStringUTFChars === undefined) {
            this._ReleaseStringUTFChars = new NativeFunction(
                this.env.readPointer().add(170 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._ReleaseStringUTFChars;
    }

    get GetArrayLength(): NativeFunction<any,any> {
        if (this._GetArrayLength === undefined) {
            this._GetArrayLength = new NativeFunction(
                this.env.readPointer().add(171 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._GetArrayLength;
    }

    get NewObjectArray(): NativeFunction<any,any> {
        if (this._NewObjectArray === undefined) {
            this._NewObjectArray = new NativeFunction(
                this.env.readPointer().add(172 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32", "pointer", "pointer"]
            );
        }
        return this._NewObjectArray;
    }

    get GetObjectArrayElement(): NativeFunction<any,any> {
        if (this._GetObjectArrayElement === undefined) {
            this._GetObjectArrayElement = new NativeFunction(
                this.env.readPointer().add(173 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "int32"]
            );
        }
        return this._GetObjectArrayElement;
    }

    get SetObjectArrayElement(): NativeFunction<any,any> {
        if (this._SetObjectArrayElement === undefined) {
            this._SetObjectArrayElement = new NativeFunction(
                this.env.readPointer().add(174 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "pointer"]
            );
        }
        return this._SetObjectArrayElement;
    }

    get NewBooleanArray(): NativeFunction<any,any> {
        if (this._NewBooleanArray === undefined) {
            this._NewBooleanArray = new NativeFunction(
                this.env.readPointer().add(175 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewBooleanArray;
    }

    get NewByteArray(): NativeFunction<any,any> {
        if (this._NewByteArray === undefined) {
            this._NewByteArray = new NativeFunction(
                this.env.readPointer().add(176 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewByteArray;
    }

    get NewCharArray(): NativeFunction<any,any> {
        if (this._NewCharArray === undefined) {
            this._NewCharArray = new NativeFunction(
                this.env.readPointer().add(177 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewCharArray;
    }

    get NewShortArray(): NativeFunction<any,any> {
        if (this._NewShortArray === undefined) {
            this._NewShortArray = new NativeFunction(
                this.env.readPointer().add(178 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewShortArray;
    }

    get NewIntArray(): NativeFunction<any,any> {
        if (this._NewIntArray === undefined) {
            this._NewIntArray = new NativeFunction(
                this.env.readPointer().add(179 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewIntArray;
    }

    get NewLongArray(): NativeFunction<any,any> {
        if (this._NewLongArray === undefined) {
            this._NewLongArray = new NativeFunction(
                this.env.readPointer().add(180 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewLongArray;
    }

    get NewFloatArray(): NativeFunction<any,any> {
        if (this._NewFloatArray === undefined) {
            this._NewFloatArray = new NativeFunction(
                this.env.readPointer().add(181 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewFloatArray;
    }

    get NewDoubleArray(): NativeFunction<any,any> {
        if (this._NewDoubleArray=== undefined) {
            this._NewDoubleArray = new NativeFunction(
                this.env.readPointer().add(182 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "int32"]
            );
        }
        return this._NewDoubleArray;
    }

    get GetBooleanArrayElements(): NativeFunction<any,any> {
        if (this._GetBooleanArrayElements === undefined) {
            this._GetBooleanArrayElements = new NativeFunction(
                this.env.readPointer().add(183 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetBooleanArrayElements;
    }

    get GetByteArrayElements(): NativeFunction<any,any> {
        if (this._GetByteArrayElements === undefined) {
            this._GetByteArrayElements = new NativeFunction(
                this.env.readPointer().add(184 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetByteArrayElements;
    }

    get GetCharArrayElements(): NativeFunction<any,any> {
        if (this._GetCharArrayElements === undefined) {
            this._GetCharArrayElements = new NativeFunction(
                this.env.readPointer().add(185 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetCharArrayElements;
    }

    get GetShortArrayElements(): NativeFunction<any,any> {
        if (this._GetShortArrayElements === undefined) {
            this._GetShortArrayElements = new NativeFunction(
                this.env.readPointer().add(186 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetShortArrayElements;
    }

    get GetIntArrayElements(): NativeFunction<any,any> {
        if (this._GetIntArrayElements === undefined) {
            this._GetIntArrayElements = new NativeFunction(
                this.env.readPointer().add(187 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetIntArrayElements;
    }

    get GetLongArrayElements(): NativeFunction<any,any> {
        if (this._GetLongArrayElements === undefined) {
            this._GetLongArrayElements = new NativeFunction(
                this.env.readPointer().add(188 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetLongArrayElements;
    }

    get GetFloatArrayElements(): NativeFunction<any,any> {
        if (this._GetFloatArrayElements === undefined) {
            this._GetFloatArrayElements = new NativeFunction(
                this.env.readPointer().add(189 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetFloatArrayElements;
    }

    get GetDoubleArrayElements(): NativeFunction<any,any> {
        if (this._GetDoubleArrayElements === undefined) {
            this._GetDoubleArrayElements = new NativeFunction(
                this.env.readPointer().add(190 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetDoubleArrayElements;
    }

    get ReleaseBooleanArrayElements(): NativeFunction<any,any> {
        if (this._ReleaseBooleanArrayElements === undefined) {
            this._ReleaseBooleanArrayElements = new NativeFunction(
                this.env.readPointer().add(191 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseBooleanArrayElements;
    }

    get ReleaseByteArrayElements(): NativeFunction<any,any> {
        if (this._ReleaseByteArrayElements === undefined) {
            this._ReleaseByteArrayElements = new NativeFunction(
                this.env.readPointer().add(192 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseByteArrayElements;
    }

    get ReleaseCharArrayElements(): NativeFunction<any,any> {
        if (this._ReleaseCharArrayElements === undefined) {
            this._ReleaseCharArrayElements = new NativeFunction(
                this.env.readPointer().add(193 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseCharArrayElements;
    }

    get ReleaseShortArrayElements(): NativeFunction<any,any> {
        if (this._ReleaseShortArrayElements === undefined) {
            this._ReleaseShortArrayElements = new NativeFunction(
                this.env.readPointer().add(194 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseShortArrayElements;
    }

    get ReleaseIntArrayElements(): NativeFunction<any,any> {
        if (this._ReleaseIntArrayElements === undefined) {
            this._ReleaseIntArrayElements = new NativeFunction(
                this.env.readPointer().add(195 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseIntArrayElements;
    }

    get ReleaseLongArrayElements(): NativeFunction<any,any> {
        if (this._ReleaseLongArrayElements === undefined) {
            this._ReleaseLongArrayElements = new NativeFunction(
                this.env.readPointer().add(196 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseLongArrayElements;
    }

    get ReleaseFloatArrayElements(): NativeFunction<any,any> {
        if (this._ReleaseFloatArrayElements === undefined) {
            this._ReleaseFloatArrayElements = new NativeFunction(
                this.env.readPointer().add(197 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseFloatArrayElements;
    }

    get ReleaseDoubleArrayElements(): NativeFunction<any,any> {
        if (this._ReleaseDoubleArrayElements === undefined) {
            this._ReleaseDoubleArrayElements = new NativeFunction(
                this.env.readPointer().add(198 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleaseDoubleArrayElements;
    }

    get GetBooleanArrayRegion(): NativeFunction<any,any> {
        if (this._GetBooleanArrayRegion === undefined) {
            this._GetBooleanArrayRegion = new NativeFunction(
                this.env.readPointer().add(199 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetBooleanArrayRegion;
    }


    get GetByteArrayRegion(): NativeFunction<any,any> {
        if (this._GetByteArrayRegion === undefined) {
            this._GetByteArrayRegion = new NativeFunction(
                this.env.readPointer().add(200 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetByteArrayRegion;
    }

    get GetCharArrayRegion(): NativeFunction<any,any> {
        if (this._GetCharArrayRegion === undefined) {
            this._GetCharArrayRegion = new NativeFunction(
                this.env.readPointer().add(201 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetCharArrayRegion;
    }

    get GetShortArrayRegion(): NativeFunction<any,any> {
        if (this._GetShortArrayRegion === undefined) {
            this._GetShortArrayRegion = new NativeFunction(
                this.env.readPointer().add(202 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetShortArrayRegion;
    }

    get GetIntArrayRegion(): NativeFunction<any,any> {
        if (this._GetIntArrayRegion === undefined) {
            this._GetIntArrayRegion = new NativeFunction(
                this.env.readPointer().add(203 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetIntArrayRegion;
    }

    get GetLongArrayRegion(): NativeFunction<any,any> {
        if (this._GetLongArrayRegion === undefined) {
            this._GetLongArrayRegion = new NativeFunction(
                this.env.readPointer().add(204 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetLongArrayRegion;
    }

    get GetFloatArrayRegion(): NativeFunction<any,any> {
        if (this._GetFloatArrayRegion === undefined) {
            this._GetFloatArrayRegion = new NativeFunction(
                this.env.readPointer().add(205 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetFloatArrayRegion;
    }

    get GetDoubleArrayRegion(): NativeFunction<any,any> {
        if (this._GetDoubleArrayRegion === undefined) {
            this._GetDoubleArrayRegion = new NativeFunction(
                this.env.readPointer().add(206 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetDoubleArrayRegion;
    }

    get SetBooleanArrayRegion(): NativeFunction<any,any> {
        if (this._SetBooleanArrayRegion === undefined) {
            this._SetBooleanArrayRegion = new NativeFunction(
                this.env.readPointer().add(207 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetBooleanArrayRegion;
    }

    get SetByteArrayRegion(): NativeFunction<any,any> {
        if (this._SetByteArrayRegion === undefined) {
            this._SetByteArrayRegion = new NativeFunction(
                this.env.readPointer().add(208 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetByteArrayRegion;
    }

    get SetCharArrayRegion(): NativeFunction<any,any> {
        if (this._SetCharArrayRegion === undefined) {
            this._SetCharArrayRegion = new NativeFunction(
                this.env.readPointer().add(209 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetCharArrayRegion;
    }

    get SetShortArrayRegion(): NativeFunction<any,any> {
        if (this._SetShortArrayRegion === undefined) {
            this._SetShortArrayRegion = new NativeFunction(
                this.env.readPointer().add(210 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetShortArrayRegion;
    }

    get SetIntArrayRegion(): NativeFunction<any,any> {
        if (this._SetIntArrayRegion === undefined) {
            this._SetIntArrayRegion = new NativeFunction(
                this.env.readPointer().add(211 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetIntArrayRegion;
    }

    get SetLongArrayRegion(): NativeFunction<any,any> {
        if (this._SetLongArrayRegion === undefined) {
            this._SetLongArrayRegion = new NativeFunction(
                this.env.readPointer().add(212 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetLongArrayRegion;
    }

    get SetFloatArrayRegion(): NativeFunction<any,any> {
        if (this._SetFloatArrayRegion === undefined) {
            this._SetFloatArrayRegion = new NativeFunction(
                this.env.readPointer().add(213 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetFloatArrayRegion;
    }


    get SetDoubleArrayRegion(): NativeFunction<any,any> {
        if (this._SetDoubleArrayRegion === undefined) {
            this._SetDoubleArrayRegion = new NativeFunction(
                this.env.readPointer().add(214 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._SetDoubleArrayRegion;
    }

    get RegisterNatives(): NativeFunction<any,any> {
        if (this._RegisterNatives === undefined) {
            this._RegisterNatives = new NativeFunction(
                this.env.readPointer().add(215 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._RegisterNatives;
    }

    get UnregisterNatives(): NativeFunction<any,any> {
        if (this._UnregisterNatives === undefined) {
            this._UnregisterNatives = new NativeFunction(
                this.env.readPointer().add(216 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._UnregisterNatives;
    }

    get MonitorEnter(): NativeFunction<any,any> {
        if (this._MonitorEnter === undefined) {
            this._MonitorEnter = new NativeFunction(
                this.env.readPointer().add(217 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._MonitorEnter;
    }

    get MonitorExit(): NativeFunction<any,any> {
        if (this._MonitorExit === undefined) {
            this._MonitorExit = new NativeFunction(
                this.env.readPointer().add(218 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._MonitorExit;
    }

    get GetJavaVM(): NativeFunction<any,any> {
        if (this._GetJavaVM === undefined) {
            this._GetJavaVM = new NativeFunction(
                this.env.readPointer().add(219 * Process.pointerSize).readPointer(),
                "int32",
                ["pointer", "pointer"]
            );
        }
        return this._GetJavaVM;
    }

    get GetStringRegion(): NativeFunction<any,any> {
        if (this._GetStringRegion === undefined) {
            this._GetStringRegion = new NativeFunction(
                this.env.readPointer().add(220 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetStringRegion;
    }

    get GetStringUTFRegion(): NativeFunction<any,any> {
        if (this._GetStringUTFRegion === undefined) {
            this._GetStringUTFRegion = new NativeFunction(
                this.env.readPointer().add(221 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "int32", "int32", "pointer"]
            );
        }
        return this._GetStringUTFRegion;
    }

    get GetPrimitiveArrayCritical(): NativeFunction<any,any> {
        if (this._GetPrimitiveArrayCritical === undefined) {
            this._GetPrimitiveArrayCritical = new NativeFunction(
                this.env.readPointer().add(222 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetPrimitiveArrayCritical;
    }

    get ReleasePrimitiveArrayCritical(): NativeFunction<any,any> {
        if (this._ReleasePrimitiveArrayCritical === undefined) {
            this._ReleasePrimitiveArrayCritical = new NativeFunction(
                this.env.readPointer().add(223 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer", "int32"]
            );
        }
        return this._ReleasePrimitiveArrayCritical;
    }

    get GetStringCritical(): NativeFunction<any,any> {
        if (this._GetStringCritical === undefined) {
            this._GetStringCritical = new NativeFunction(
                this.env.readPointer().add(224 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._GetStringCritical;
    }

    get ReleaseStringCritical(): NativeFunction<any,any> {
        if (this._ReleaseStringCritical === undefined) {
            this._ReleaseStringCritical = new NativeFunction(
                this.env.readPointer().add(225 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer", "pointer"]
            );
        }
        return this._ReleaseStringCritical;
    }

    get NewWeakGlobalRef(): NativeFunction<any,any> {
        if (this._NewWeakGlobalRef === undefined) {
            this._NewWeakGlobalRef = new NativeFunction(
                this.env.readPointer().add(226 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._NewWeakGlobalRef;
    }

    get DeleteWeakGlobalRef(): NativeFunction<any,any> {
        if (this._DeleteWeakGlobalRef === undefined) {
            this._DeleteWeakGlobalRef = new NativeFunction(
                this.env.readPointer().add(227 * Process.pointerSize).readPointer(),
                "void",
                ["pointer", "pointer"]
            );
        }
        return this._DeleteWeakGlobalRef;
    }

    get ExceptionCheck(): NativeFunction<any,any> {
        if (this._ExceptionCheck === undefined) {
            this._ExceptionCheck = new NativeFunction(
                this.env.readPointer().add(228 * Process.pointerSize).readPointer(),
                "bool",
                ["pointer"]
            );
        }
        return this._ExceptionCheck;
    }

    get NewDirectByteBuffer(): NativeFunction<any,any> {
        if (this._NewDirectByteBuffer === undefined) {
            this._NewDirectByteBuffer = new NativeFunction(
                this.env.readPointer().add(229 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer", "int64"]
            );
        }
        return this._NewDirectByteBuffer;
    }

    get GetDirectBufferAddress(): NativeFunction<any,any> {
        if (this._GetDirectBufferAddress === undefined) {
            this._GetDirectBufferAddress = new NativeFunction(
                this.env.readPointer().add(230 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._GetDirectBufferAddress;
    }

    get GetDirectBufferCapacity(): NativeFunction<any,any> {
        if (this._GetDirectBufferCapacity === undefined) {
            this._GetDirectBufferCapacity = new NativeFunction(
                this.env.readPointer().add(231 * Process.pointerSize).readPointer(),
                "int64",
                ["pointer", "pointer"]
            );
        }
        return this._GetDirectBufferCapacity;
    }

    get GetObjectRefType(): NativeFunction<any,any> {
        if (this._GetObjectRefType === undefined) {
            this._GetObjectRefType = new NativeFunction(
                this.env.readPointer().add(232 * Process.pointerSize).readPointer(),
                "pointer",
                ["pointer", "pointer"]
            );
        }
        return this._GetObjectRefType;
    }
}