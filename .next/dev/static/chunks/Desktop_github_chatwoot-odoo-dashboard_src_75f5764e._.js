(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "askAIAgent",
    ()=>askAIAgent,
    "checkManualSync",
    ()=>checkManualSync,
    "createQuote",
    ()=>createQuote,
    "fetchLeadByContactId",
    ()=>fetchLeadByContactId,
    "updateLeadField",
    ()=>updateLeadField,
    "updateLeadStage",
    ()=>updateLeadStage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const N8N_BASE_URL = 'https://n8n.srv865019.hstgr.cloud';
const api = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: N8N_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});
const fetchLeadByContactId = async (contactId)=>{
    const response = await api.get(`/webhook/chatwoot-odoo-lookup`, {
        params: {
            contact_id: contactId
        }
    });
    return response.data;
};
const updateLeadField = async (leadId, field, value)=>{
    const response = await api.post(`/webhook/odoo-update-lead`, {
        lead_id: leadId,
        field,
        value
    });
    return response.data;
};
const updateLeadStage = async (leadId, stageId)=>{
    // Reuse update lead or specific endpoint? Prompt implies "Clicking a new stage updates... via n8n".
    // Assuming generic update or specific. Let's use generic update for now or a specific one if implied.
    // Prompt says: "Logic: Clicking a new stage updates the status in Odoo immediately via n8n."
    // Using updateLeadField for stage_id is likely correct for Odoo.
    return updateLeadField(leadId, 'stage_id', stageId);
};
const checkManualSync = async (data)=>{
    const response = await api.post(`/webhook/chatwoot-manual-sync`, data);
    return response.data; // Expected: { lead_id: number, status: 'linked' | 'created' }
};
const createQuote = async (leadId, productId)=>{
    const response = await api.post(`/webhook/odoo-create-quote`, {
        lead_id: leadId,
        product_id: productId
    });
    return response.data; // Expected: { pdf_url: string }
};
const askAIAgent = async (query, history = [])=>{
    // Streaming response might need fetch instead of axios for proper handling, but for now simple post
    const response = await fetch(`${N8N_BASE_URL}/webhook/ask-ai-agent`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query,
            history
        })
    });
    if (!response.body) throw new Error('No response body');
    return response.body.getReader();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCurrency",
    ()=>formatCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function formatCurrency(value) {
    return new Intl.NumberFormat('nl-NL', {
        style: 'currency',
        currency: 'EUR'
    }).format(value);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Simple Label component inline for now
const Label = ({ className, children, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = Label;
function LeadDetails({ lead }) {
    _s();
    var _s1 = __turbopack_context__.k.signature();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { mutate, isPending, variables } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "LeadDetails.useMutation": async ({ field, value })=>{
                return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLeadField"])(lead.id, field, value);
            }
        }["LeadDetails.useMutation"],
        onSuccess: {
            "LeadDetails.useMutation": ()=>{
                // Invalidate query to refetch fresh data
                queryClient.invalidateQueries({
                    queryKey: [
                        'lead',
                        lead.id
                    ]
                });
            }
        }["LeadDetails.useMutation"],
        onError: {
            "LeadDetails.useMutation": (error)=>{
                console.error("Failed to update", error);
                alert("Update failed"); // Replace with toast later
            }
        }["LeadDetails.useMutation"]
    });
    // Helper to render editable field
    const renderField = (label, fieldKey, value, type = "text")=>{
        _s1();
        const [localValue, setLocalValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value || '');
        const [isDirty, setIsDirty] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
            "LeadDetails.renderField.useEffect": ()=>{
                setLocalValue(value || '');
            }
        }["LeadDetails.renderField.useEffect"], [
            value
        ]);
        const handleBlur = ()=>{
            if (localValue !== (value || '')) {
                mutate({
                    field: fieldKey,
                    value: localValue
                });
                setIsDirty(false);
            }
        };
        const handleChange = (e)=>{
            setLocalValue(e.target.value);
            setIsDirty(true);
        };
        const isUpdating = isPending && variables?.field === fieldKey;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Label, {
                    children: label
                }, void 0, false, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            type: type,
                            value: localValue,
                            onChange: handleChange,
                            onBlur: handleBlur,
                            disabled: isUpdating,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isUpdating && "opacity-50")
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        isUpdating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "absolute right-3 top-2.5 h-4 w-4 animate-spin text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
                            lineNumber: 72,
                            columnNumber: 26
                        }, this),
                        !isUpdating && isDirty && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute right-3 top-2.5 h-2 w-2 rounded-full bg-yellow-500",
                            title: "Unsaved"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
                            lineNumber: 73,
                            columnNumber: 38
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this);
    };
    _s1(renderField, "wWmw+k3xI9+V39IQEdMYPqpa/wg=");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid gap-4 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: [
                    renderField("Naam", "contact_name", lead.contact_name || lead.name),
                    renderField("Telefoon", "phone", lead.phone, "tel"),
                    renderField("Email", "email_from", lead.email_from, "email"),
                    renderField("Voertuig", "x_studio_voertuig", lead.x_studio_voertuig),
                    renderField("Velgmodel", "x_studio_velgmodel", lead.x_studio_velgmodel),
                    renderField("Inchmaat", "x_studio_inchmaat", lead.x_studio_inchmaat),
                    renderField("Kleur", "x_studio_kleur", lead.x_studio_kleur)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-xs text-muted-foreground mt-2",
                children: "Wijzigingen worden automatisch opgeslagen."
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
_s(LeadDetails, "VctAkbJP4Pep/wjrWqmpEZpsX6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c1 = LeadDetails;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label");
__turbopack_context__.k.register(_c1, "LeadDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "STAGES",
    ()=>STAGES
]);
const STAGES = [
    {
        id: 1,
        name: "New"
    },
    {
        id: 2,
        name: "Qualified"
    },
    {
        id: 3,
        name: "Proposition"
    },
    {
        id: 4,
        name: "Won"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LeadPipeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function LeadPipeline({ lead }) {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const currentStageId = lead.stage_id ? lead.stage_id[0] : 0;
    const stageMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "LeadPipeline.useMutation[stageMutation]": ({ stageId })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLeadStage"])(lead.id, stageId)
        }["LeadPipeline.useMutation[stageMutation]"],
        onSuccess: {
            "LeadPipeline.useMutation[stageMutation]": ()=>queryClient.invalidateQueries({
                    queryKey: [
                        'lead',
                        lead.id
                    ]
                })
        }["LeadPipeline.useMutation[stageMutation]"]
    });
    const probMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "LeadPipeline.useMutation[probMutation]": ({ prob })=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateLeadField"])(lead.id, 'probability', prob)
        }["LeadPipeline.useMutation[probMutation]"],
        onSuccess: {
            "LeadPipeline.useMutation[probMutation]": ()=>queryClient.invalidateQueries({
                    queryKey: [
                        'lead',
                        lead.id
                    ]
                })
        }["LeadPipeline.useMutation[probMutation]"]
    });
    const [probability, setProbability] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(lead.probability || 0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LeadPipeline.useEffect": ()=>{
            setProbability(lead.probability || 0);
        }
    }["LeadPipeline.useEffect"], [
        lead.probability
    ]);
    const handleStageClick = (stageId)=>{
        if (stageId === currentStageId) return;
        stageMutation.mutate({
            stageId
        });
    };
    const handleProbChange = (e)=>{
        setProbability(Number(e.target.value));
    };
    const handleProbCommit = ()=>{
        if (probability !== lead.probability) {
            probMutation.mutate({
                prob: probability
            });
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-6 py-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex items-center justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGES"].map((stage, index)=>{
                        const isActive = currentStageId === stage.id;
                        const isCompleted = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STAGES"].findIndex((s)=>s.id === currentStageId) > index;
                        const isPending = stageMutation.isPending && stageMutation.variables?.stageId === stage.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleStageClick(stage.id),
                            disabled: stageMutation.isPending,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center group focus:outline-none", isActive || isCompleted ? "text-blue-600" : "text-gray-500"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors bg-white", isActive ? "border-blue-600 bg-blue-50" : isCompleted ? "border-blue-600 bg-blue-600 text-white" : "border-gray-300 group-hover:border-gray-400"),
                                    children: isPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "w-4 h-4 animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                                        lineNumber: 76,
                                        columnNumber: 30
                                    }, this) : isCompleted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                                        lineNumber: 77,
                                        columnNumber: 32
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold",
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                                        lineNumber: 78,
                                        columnNumber: 18
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mt-2 text-xs font-medium",
                                    children: stage.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, stage.id, true, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                            lineNumber: 61,
                            columnNumber: 13
                        }, this);
                    })
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between text-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Slagingskans"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-bold",
                                children: [
                                    probability,
                                    "%"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "range",
                        min: "0",
                        max: "100",
                        step: "10",
                        value: probability,
                        onChange: handleProbChange,
                        onMouseUp: handleProbCommit,
                        onTouchEnd: handleProbCommit,
                        className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600",
                        disabled: probMutation.isPending
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(LeadPipeline, "ZL7T9y/W2XgLFWr+djh5nu6BAiQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = LeadPipeline;
var _c;
__turbopack_context__.k.register(_c, "LeadPipeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant = "default", size = "default", isLoading, children, ...props }, ref)=>{
    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        destructive: "bg-red-500 text-white hover:bg-red-600"
    };
    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", variants[variant], sizes[size], className),
        ref: ref,
        disabled: isLoading || props.disabled,
        ...props,
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                className: "mr-2 h-4 w-4 animate-spin"
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/button.tsx",
                lineNumber: 39,
                columnNumber: 23
            }, ("TURBOPACK compile-time value", void 0)),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/button.tsx",
        lineNumber: 28,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ActionsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ActionsPanel({ lead }) {
    _s();
    const quoteMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "ActionsPanel.useMutation[quoteMutation]": ()=>{
                // Assuming product_id is derived from lead.x_studio_velgmodel or similar, or just a default generic quote
                const productId = lead.x_studio_velgmodel || "standard_rim";
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createQuote"])(lead.id, productId);
            }
        }["ActionsPanel.useMutation[quoteMutation]"],
        onSuccess: {
            "ActionsPanel.useMutation[quoteMutation]": (data)=>{
                if (data.url) {
                    window.open(data.url, '_blank');
                } else {
                    alert("Offerte gemaakt, maar geen URL ontvangen.");
                }
            }
        }["ActionsPanel.useMutation[quoteMutation]"],
        onError: {
            "ActionsPanel.useMutation[quoteMutation]": ()=>{
                alert("Kon offerte niet genereren.");
            }
        }["ActionsPanel.useMutation[quoteMutation]"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-sm font-semibold uppercase tracking-wider text-muted-foreground",
                    children: "Acties"
                }, void 0, false, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "outline",
                        className: "justify-start",
                        onClick: ()=>quoteMutation.mutate(),
                        isLoading: quoteMutation.isPending,
                        disabled: !lead.x_studio_velgmodel,
                        title: !lead.x_studio_velgmodel ? "Selecteer eerst een velgmodel" : "",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx",
                                lineNumber: 47,
                                columnNumber: 11
                            }, this),
                            "Maak Offerte PDF"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    lead.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        className: "justify-start text-blue-600 hover:text-blue-700",
                        onClick: ()=>window.open(`https://korbach-forged.odoo.com/web#id=${lead.id}&model=crm.lead&view_type=form`, '_blank'),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                className: "mr-2 h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx",
                                lineNumber: 57,
                                columnNumber: 13
                            }, this),
                            "Open in Odoo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_s(ActionsPanel, "vHXu8CygVvR7Dn95lrbpJ0YnPOs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = ActionsPanel;
var _c;
__turbopack_context__.k.register(_c, "ActionsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Modal",
    ()=>Modal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const Modal = ({ isOpen, onClose, title, children })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const handleEsc = {
                "Modal.useEffect.handleEsc": (e)=>{
                    if (e.key === 'Escape') onClose();
                }
            }["Modal.useEffect.handleEsc"];
            window.addEventListener('keydown', handleEsc);
            return ({
                "Modal.useEffect": ()=>window.removeEventListener('keydown', handleEsc)
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        onClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md rounded-lg bg-white shadow-lg animate-in fade-in zoom-in-95 duration-200",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between border-b p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            size: "icon",
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Modal, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CreateLeadModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function CreateLeadModal({ isOpen, onClose, contact }) {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(contact.name || '');
    const [phone, setPhone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(contact.phone_number || '');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(contact.email || '');
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const mutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkManualSync"],
        onSuccess: {
            "CreateLeadModal.useMutation[mutation]": (data)=>{
                // Data likely contains { lead_id, status, message }
                // We should invalidate the main lead query to reload the dashboard with the new/linked lead
                queryClient.invalidateQueries({
                    queryKey: [
                        'lead'
                    ]
                }); // Invalidate generic or specific
                // Ideally we pass the new lead ID up or reload context. 
                // Assuming the main page queries based on Chatwoot ID, re-fetching that will now find the lead.
                onClose();
                alert(`Succes: ${data.status === 'created' ? 'Nieuwe lead aangemaakt' : 'Gekoppeld aan bestaande lead'}`);
            }
        }["CreateLeadModal.useMutation[mutation]"],
        onError: {
            "CreateLeadModal.useMutation[mutation]": ()=>{
                alert("Fout bij synchroniseren.");
            }
        }["CreateLeadModal.useMutation[mutation]"]
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        mutation.mutate({
            name,
            phone,
            email,
            chatwoot_id: contact.id
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        isOpen: isOpen,
        onClose: onClose,
        title: "Nieuwe Lead / Koppelen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-medium",
                            children: "Naam"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: name,
                            onChange: (e)=>setName(e.target.value),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-medium",
                            children: "Telefoon"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: phone,
                            onChange: (e)=>setPhone(e.target.value),
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            className: "text-sm font-medium",
                            children: "Email"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            value: email,
                            onChange: (e)=>setEmail(e.target.value),
                            type: "email"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-4 flex justify-end space-x-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            onClick: onClose,
                            children: "Annuleren"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "submit",
                            isLoading: mutation.isPending,
                            children: "Sync naar Odoo"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
            lineNumber: 51,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_s(CreateLeadModal, "97mgDt5Exe0aJ8Cc194dJwmq44s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
_c = CreateLeadModal;
var _c;
__turbopack_context__.k.register(_c, "CreateLeadModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AIAssistant
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function AIAssistant() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AIAssistant.useEffect": ()=>{
            if (scrollRef.current) {
                scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
            }
        }
    }["AIAssistant.useEffect"], [
        messages
    ]);
    const handleSend = async (e)=>{
        e.preventDefault();
        if (!input.trim()) return;
        const userMsg = input;
        setMessages((prev)=>[
                ...prev,
                {
                    role: 'user',
                    content: userMsg
                }
            ]);
        setInput('');
        setIsLoading(true);
        try {
            const reader = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["askAIAgent"])(userMsg, messages);
            if (!reader) throw new Error("No stream");
            // Add placeholder for assistant
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        content: ''
                    }
                ]);
            const decoder = new TextDecoder();
            let done = false;
            let accumulatedResponse = "";
            while(!done){
                const { value, done: doneReading } = await reader.read();
                done = doneReading;
                const chunkValue = decoder.decode(value, {
                    stream: true
                });
                accumulatedResponse += chunkValue;
                setMessages((prev)=>{
                    const newHistory = [
                        ...prev
                    ];
                    const lastMsg = newHistory[newHistory.length - 1];
                    if (lastMsg.role === 'assistant') {
                        lastMsg.content = accumulatedResponse;
                    }
                    return newHistory;
                });
            }
        } catch (error) {
            console.error(error);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: 'assistant',
                        content: "Sorry, ik kon geen verbinding maken met de AI agent."
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    if (!isOpen) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            onClick: ()=>setIsOpen(true),
            className: "fixed bottom-4 right-4 h-12 w-12 rounded-full shadow-lg p-0",
            title: "AI Assistant",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                className: "h-6 w-6"
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                lineNumber: 73,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 w-80 md:w-96 h-[500px] bg-white rounded-lg shadow-xl border flex flex-col z-50 animate-in slide-in-from-bottom-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between p-4 border-b bg-slate-50 rounded-t-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                className: "h-4 w-4 text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-sm",
                                children: "AI Sales Assistant"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "icon",
                        className: "h-6 w-6",
                        onClick: ()=>setIsOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-y-auto p-4 space-y-4",
                ref: scrollRef,
                children: [
                    messages.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center text-muted-foreground text-xs mt-10",
                        children: "Stel een vraag over voorraad, leads of historie."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this),
                    messages.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-full", m.role === 'user' ? "justify-end" : "justify-start"),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-[80%] rounded-lg px-3 py-2 text-sm", m.role === 'user' ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-800"),
                                children: m.content
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, i, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this)),
                    isLoading && messages[messages.length - 1]?.role !== 'assistant' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-slate-100 rounded-lg px-3 py-2 text-xs text-slate-500 animate-pulse",
                            children: "Typing..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                            lineNumber: 118,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                        lineNumber: 117,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSend,
                className: "p-3 border-t flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        value: input,
                        onChange: (e)=>setInput(e.target.value),
                        placeholder: "Typ je vraag...",
                        className: "flex-1 text-sm"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        size: "icon",
                        disabled: isLoading || !input.trim(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
_s(AIAssistant, "cKU40NKiBlult0Divr6WygiuJvM=");
_c = AIAssistant;
var _c;
__turbopack_context__.k.register(_c, "AIAssistant");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm bg-white", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/card.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardContent;
CardContent.displayName = "CardContent";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$LeadDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$LeadPipeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/LeadPipeline.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ActionsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ActionsPanel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$CreateLeadModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/CreateLeadModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$AIAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/AIAssistant.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/github/chatwoot-odoo-dashboard/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function Dashboard() {
    _s();
    const [contact, setContact] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Listen to Chatwoot events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            const handleMessage = {
                "Dashboard.useEffect.handleMessage": (event)=>{
                    if (typeof event.data !== 'string') return;
                    try {
                        const parsed = JSON.parse(event.data);
                        if (parsed.event !== 'appContext') return;
                        const contactData = parsed.data.contact;
                        if (contactData) {
                            setContact({
                                id: contactData.id,
                                name: contactData.name,
                                email: contactData.email,
                                phone_number: contactData.phone_number,
                                custom_attributes: contactData.custom_attributes
                            });
                        }
                    } catch (e) {
                        console.error("Error parsing Chatwoot event", e);
                    }
                }
            }["Dashboard.useEffect.handleMessage"];
            window.addEventListener('message', handleMessage);
            // Request context
            window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');
            return ({
                "Dashboard.useEffect": ()=>window.removeEventListener('message', handleMessage)
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], []);
    // Fetch Odoo Lead
    const { data, isLoading, error, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'lead',
            contact?.id
        ],
        queryFn: {
            "Dashboard.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchLeadByContactId"])(contact.id)
        }["Dashboard.useQuery"],
        enabled: !!contact?.id
    });
    if (!contact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-screen items-center justify-center p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "flex flex-col items-center justify-center p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                            className: "mb-4 h-8 w-8 animate-spin text-muted-foreground"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-muted-foreground",
                            children: "Wachten op Chatwoot data..."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                    lineNumber: 62,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 61,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
            lineNumber: 60,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto max-w-3xl p-4 space-y-6 pb-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-xl font-bold",
                        children: "Sales Command Center"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                            "Chatwoot ID: ",
                            contact.id
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "h-8 w-8 animate-spin text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "border-red-200 bg-red-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "flex items-center p-4 text-red-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "mr-2 h-5 w-5"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this),
                        "Fout bij laden van Odoo data."
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                    lineNumber: 86,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 85,
                columnNumber: 9
            }, this),
            !isLoading && !error && !data?.lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "flex flex-col items-center justify-center p-8 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-semibold",
                            children: "Geen Odoo lead gevonden"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 96,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-muted-foreground",
                            children: "Dit contact is nog niet gekoppeld aan een Odoo lead."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 97,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: ()=>setIsCreateModalOpen(true),
                            children: "Maak of Koppel Lead"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            !isLoading && data?.lead && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                className: "pb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                            children: data.lead.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                            lineNumber: 112,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-muted-foreground",
                                            children: [
                                                "ID: ",
                                                data.lead.id
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                            lineNumber: 113,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 110,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$LeadPipeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    lead: data.lead
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 116,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 109,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                    className: "text-base",
                                    children: "Lead Details"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$LeadDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    lead: data.lead
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "pt-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$ActionsPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                lead: data.lead
                            }, void 0, false, {
                                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                                lineNumber: 132,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                            lineNumber: 131,
                            columnNumber: 14
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$CreateLeadModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isCreateModalOpen,
                onClose: ()=>{
                    setIsCreateModalOpen(false);
                    refetch();
                },
                contact: contact
            }, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$src$2f$components$2f$AIAssistant$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/github/chatwoot-odoo-dashboard/src/app/page.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "TjO6udVYrMqFAZej/GhcP2DVcMY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$github$2f$chatwoot$2d$odoo$2d$dashboard$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_github_chatwoot-odoo-dashboard_src_75f5764e._.js.map